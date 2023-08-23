<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>eShop</title>
    <link rel="icon" href="resources/logo.svg" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="style.css" />
</head>

<body class="main-body">
    <div class="container-fluid vh-100 d-flex justify-content-center">
        <div class="row align-content-center">

            <!-- header -->
            <div class="col-12">
                <div class="row">
                    <div class="col-12 logo"></div>
                    <div class="col-12">
                        <p class="text-center title01">Hi, Welcome to eShop</p>
                    </div>
                </div>
            </div>
            <!-- /header -->

            <!-- content -->
            <div class="col-12 p-3">
                <div class="row">

                    <div class="col-6 d-none d-lg-block background"></div>

                    <!-- signup box -->
                    <div class="col-12 col-lg-6" id="signupbox">
                        <div class="row g-2">

                            <div class="col-12">
                                <p class="title02">Create New Account.</p>
                            </div>

                            <div class="col-12 d-none" id="msgdiv">
                                  <div class="alert alert-danger" role="alert" id="msg"></div>
                            </div>

                            <div class="col-6">
                                <label class="form-label">First Name</label>
                                <input class="form-control" type="text" placeholder="ex: John" id="fname" />
                            </div>

                            <div class="col-6">
                                <label class="form-label">Last Name</label>
                                <input class="form-control" type="text" placeholder="ex: Doe" id="lname" />
                            </div>

                            <div class="col-12">
                                <label class="form-label">Email</label>
                                <input class="form-control" type="email" placeholder="ex: john@gmail.com" id="email" />
                            </div>

                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input class="form-control" type="password" placeholder="ex: ********" id="password" />
                            </div>

                            <div class="col-6">
                                <label class="form-label">Mobile</label>
                                <input class="form-control" type="text" placeholder="ex: 077 111 5552" id="mobile" />
                            </div>
                            <div class="col-6">
                                <label class="form-label">Gender</label>
                                <select class="form-control" id="gender">
                                    <option value="0">Select your Gender</option>
                                    <?php
                                        require "connection.php";

                                        $rs = Database::search("SELECT * FROM `gender`");
                                        $n = $rs->num_rows;

                                        for ($x = 0; $x < $n; $x++) {
                                            $d = $rs->fetch_assoc();
                                        ?>
                                          <option value="<?php echo $d["id"]; ?>"><?php echo $d["gender_name"]; ?></option>
                                      <?php
                                        }
                                    ?>
                                </select>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-primary" onclick="signUp();">Sign Up</button>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-dark" onclick="changeView();">Already have an Account? Sign In</button>
                            </div>

                        </div>
                    </div>
                    <!-- /signup box -->

                    <!-- signin box -->
                    <div class="col-12 col-lg-6 d-none" id="signinbox">
                        <div class="row g-2">

                            <div class="col-12">
                                <p class="title02">Sign In</p>
                            </div>

                            <?php
                                $email = "";
                                $password = "";

                                if (isset($_COOKIE["email"])) {
                                    $email = $_COOKIE["email"];
                                }

                                if (isset($_COOKIE["password"])) {
                                    $password = $_COOKIE["password"];
                                }
                            ?>

                            <div class="col-12">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="ex: john@gmail.com" id="email2" value="<?php echo $email; ?>" />
                            </div>

                            <div class="col-12">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="ex: ********" id="password2" value="<?php echo $password; ?>" />
                            </div>

                            <div class="col-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="rememberme">
                                    <label class="form-check-label" for="rememberme">Remember Me.</label>
                                </div>
                            </div>

                            <div class="col-6 text-end">
                                <a href="#" class="link-primary">Forgotten Password?</a>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-primary" onclick="signin();">Sign In</button>
                            </div>

                            <div class="col-12 col-lg-6 d-grid">
                                <button class="btn btn-danger" onclick="changeView();">New to eShop? Join Now</button>
                            </div>

                        </div>
                    </div>
                    <!-- /signin box -->
                </div>
            </div>
            <!-- /content -->

            <!-- footer -->
            <div class="col-12 d-none d-lg-block fixed-bottom">
                <p class="text-center">&copy; 2023 eShop.lk || All Rights Reserved</p>
            </div>
            <!-- /footer -->
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>