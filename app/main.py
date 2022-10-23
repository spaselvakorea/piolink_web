import os

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
        <form action="" method="post">
            <p><input type=text name=username>
            <p><input type=password name=password>
            <p><input type=submit value=Login>
        </form>
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
