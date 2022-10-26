import os
import sys
import mysql.connector as database
import configparser
import json
import io

from flask import Flask, send_file, render_template, redirect, url_for, request, Response, session, abort
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user

app = Flask(__name__)

# config
app.config.update(
    DEBUG = True,
    SECRET_KEY = 'secret_xxx'
)

# flask-login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


# silly user model
class User(UserMixin):

    def __init__(self, id):
        self.id = id
        self.name = "user" + str(id)
        self.password = self.name + "_secret"
        
    def __repr__(self):
        return "%d/%s/%s" % (self.id, self.name, self.password)


# create some users with ids 1 to 20       
users = [User(id) for id in range(1, 21)]


@app.route("/hello")
def hello():
    return "Hello World from Flask in a uWSGI Nginx Docker container with \
     Python 3.7 (from the example template)"


@app.route("/")
@login_required
def home():
    index_path = os.path.join(app.static_folder, "index.html")
    return send_file(index_path)

# somewhere to login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']        
        if password == username + "_secret":
            #id = username.split('user')[1]
            id = username
            user = User(id)
            login_user(user)
            return redirect('/')
        else:
            return abort(401)
    else:
        return Response('''
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>PIOLINK CTI | Login</title>
	<link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.ico">
	<link href="../assets/css/vendor.min.css" rel="stylesheet" />
	<link href="../assets/css/app.min.css" rel="stylesheet" />
</head>
<body class='pace-top'>
	<div id="app" class="app app-full-height app-without-header">
		<div class="login">
			<div class="login-content">
				<form action="" method="POST" name="login_form">
					<h1 class="text-center">
						PIOLINK CTI v2.0
					</h1>
					<div class="text-white text-center mb-4">
						Version 2.xxx<br>
					</div>
					<div class="mb-3">
						<label class="form-label">ID <span class="text-danger">*</span></label>
						<input type="text" name="username" class="form-control form-control-lg bg-white bg-opacity-5" value="" placeholder="" />
					</div>
					<div class="mb-3">
						<div class="d-flex">
							<label class="form-label">Password <span class="text-danger">*</span></label>
						</div>
						<input type="password" name="password" class="form-control form-control-lg bg-white bg-opacity-5" value="" placeholder="" />
					</div>
                    <input type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3" value="Login">
				</form>
			</div>
		</div>	
	</div>
</body>
</html>
        ''')


# somewhere to logout
@app.route("/logout")
@login_required
def logout():
    logout_user()
    #return Response('<p>Logged out</p>')
    return redirect('/login')

# handle login failed
@app.errorhandler(401)
def page_not_found(e):
    return Response('<p>Login failed</p>')
    
    
# callback to reload the user object        
@login_manager.user_loader
def load_user(userid):
    return User(userid)

# Everything not declared before (not a Flask route / API endpoint)...
@app.route("/<path:path>")

def route_frontend(path):
    # ...could be a static file needed by the front end that
    # doesn't use the `static` path (like in `<script src="bundle.js">`)
    file_path = os.path.join(app.static_folder, path)
    if os.path.isfile(file_path):
        return send_file(file_path)
    # ...or should be handled by the SPA's "router" in front end
    else:
        index_path = os.path.join(app.static_folder, "index.html")
        return send_file(index_path)


if __name__ == "__main__":
    # Only for debugging while developing
    #app.run(host="0.0.0.0", debug=True, port=80)
    app.run(debug=True, port=8080, host='192.168.1.229')
