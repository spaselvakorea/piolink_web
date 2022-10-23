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
def main():
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
            return redirect(request.args.get("next"))
        else:
            return abort(401)
    else:
        return Response('''
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>PIOLINK CTI | Login</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <!-- App favicon -->
            <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.ico">
            
            <!-- ================== BEGIN core-css ================== -->
            <link href="../assets/css/vendor.min.css" rel="stylesheet" />
            <link href="../assets/css/app.min.css" rel="stylesheet" />
            <!-- ================== END core-css ================== -->
            
        </head>
        <body class='pace-top'>
            <!-- BEGIN #app -->
            <div id="app" class="app app-full-height app-without-header">
                <!-- BEGIN login -->
                <div class="login">
                    <!-- BEGIN login-content -->
                    <div class="login-content">
                        <form action="index.html" method="POST" name="login_form">
                            <!-- <h1 class="text-center">Zombie Zero</h1> -->
                            <h1 class="text-center">
                                <!-- <img src="../assets/img/logo/logo.svg" alt="main logo" style="width: 128px"> -->
                                PIOLINK CTI v2.0
                            </h1>
                            <div class="text-white text-center mb-4">
                                Version 2.xxx<br>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">ID <span class="text-danger">*</span></label>
                                <input type="text" name=username class="form-control form-control-lg bg-white bg-opacity-5" value="" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <div class="d-flex">
                                    <label class="form-label">Password <span class="text-danger">*</span></label>
                                    <!-- <a href="#" class="ms-auto text-white text-decoration-none text-opacity-50">Forgot password?</a> -->
                                </div>
                                <input type="password" name=password class="form-control form-control-lg bg-white bg-opacity-5" value="" placeholder="" />
                            </div>
                            <!-- <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="customCheck1" />
                                    <label class="form-check-label" for="customCheck1">Remember me</label>
                                </div>
                            </div> -->
                            <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Login</button>
                            <!-- <div class="text-center text-white text-opacity-50">
                                도움이 필요하십니까? <a href="page_register.html" data-bs-toggle="modal" data-bs-target="#modalSm">Help</a>.<br>
                                Version 4.0.2.814
                            </div> -->
                        </form>
                    </div>
                    <!-- END login-content -->
                    <!-- modal-sm -->
                    <div class="modal fade" id="modalSm">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content" style="margin-top: 300px;">
                                <div class="modal-header">
                                    <h5 class="modal-title">관리자 연락처</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    관리자 : 최고관리자<br>
                                    핸드폰 : 010-123-1234<br>
                                    내선번호 : 1212
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END modal-sm -->
                </div>
                <!-- END login -->
                
                <!-- BEGIN btn-scroll-top -->
                <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
                <!-- END btn-scroll-top -->
            </div>
            <!-- END #app -->
            
            <!-- ================== BEGIN core-js ================== -->
            <script src="../assets/js/vendor.min.js"></script>
            <script src="../assets/js/app.min.js"></script>
            <!-- ================== END core-js ================== -->
            
        </body>
        </html>

        ''')


# somewhere to logout
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return Response('<p>Logged out</p>')

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
