<?php
session_start();
require "connection.php";

if(isset($_GET["id"])){
    $pid = $_GET["id"];

    $user = $_SESSION["u"];

    $product_rs = Database::search("SELECT product.id,product.price,product.qty,product.description,
    product.title,product.datetime_added,product.delivery_fee_colombo,product.delivery_fee_other,
    product.category_cat_id,product.model_has_brand_id,product.color_clr_id,product.status_status_id,
    product.condition_condition_id,product.users_email,model.model_name AS mname,
    brand.brand_name AS bname FROM `product` INNER JOIN `model_has_brand` ON 
    model_has_brand.id=product.model_has_brand_id INNER JOIN `brand` ON 
    brand.brand_id=model_has_brand.brand_brand_id INNER JOIN `model` ON 
    model.model_id=model_has_brand.model_model_id WHERE product.id='".$pid."'");

    $product_num = $product_rs->num_rows;
    if($product_num == 1){
        $product_data = $product_rs->fetch_assoc();
    }

}


?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Single Product View | eShop</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css" />

    <link rel="icon" href="resources/logo.svg" />
</head>

<body>

    <div class="container-fluid">
        <div class="row">
            <?php include "header.php"; ?>

            <div class="col-12 mt-0 bg-white singleProduct">
                <div class="row">
                    <div class="col-12" style="padding: 10px;">
                        <div class="row">

                            <div class="col-12 col-lg-2 order-2 order-lg-1">
                                <ul>

                                    <li class="d-flex flex-column justify-content-center align-items-center 
                                border border-1 border-secondary mb-1">
                                        <img src="resources/addproductimg.svg" class="img-thumbnail mt-1 mb-1" />
                                    </li>
                                    <li class="d-flex flex-column justify-content-center align-items-center 
                                border border-1 border-secondary mb-1">
                                        <img src="resources/addproductimg.svg" class="img-thumbnail mt-1 mb-1" />
                                    </li>
                                    <li class="d-flex flex-column justify-content-center align-items-center 
                                border border-1 border-secondary mb-1">
                                        <img src="resources/addproductimg.svg" class="img-thumbnail mt-1 mb-1" />
                                    </li>

                                </ul>
                            </div>

                            <div class="col-lg-4 order-2 order-lg-1 d-none d-lg-block">
                                <div class="row">
                                    <div class="col-12 align-items-center border border-1 
                                border-secondary">
                                        <div class="mainImg" id="mainImg"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6 order-3">
                                <div class="row">
                                    <div class="col-12">

                                        <div class="row border-bottom border-dark">
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item"><a href="home.php">Home</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page">Single Product View</li>
                                                </ol>
                                            </nav>
                                        </div>

                                        <div class="row border-bottom border-dark">
                                            <div class="col-12 my-2">
                                                <span class="fs-4 fw-bold text-success">Apple iPhone 12</span>
                                            </div>
                                        </div>

                                        <div class="row border-bottom border-dark">
                                            <div class="col-12 my-2">
                                                <span class="badge">
                                                    <i class="bi bi-star-fill text-warning fs-5"></i>
                                                    <i class="bi bi-star-fill text-warning fs-5"></i>
                                                    <i class="bi bi-star-fill text-warning fs-5"></i>
                                                    <i class="bi bi-star-fill text-warning fs-5"></i>
                                                    <i class="bi bi-star-fill text-warning fs-5"></i>

                                                    &nbsp;&nbsp;&nbsp;

                                                    <label class="fs-5 text-dark fw-bold">4.5 Stars | 39 Reviews and Ratings</label>
                                                </span>
                                            </div>
                                        </div>


                                        <div class="row border-bottom border-dark">
                                            <div class="col-12 my-2">
                                                <span class="fs-4 text-dark fw-bold">Rs. 120000 .00</span>
                                                &nbsp;&nbsp; | &nbsp;&nbsp;
                                                <span class="fs-4 text-danger fw-bold">Rs. 100000 .00</span>
                                                &nbsp;&nbsp; | &nbsp;&nbsp;
                                                <span class="fs-4 fw-bold text-black-50">Save Rs. 20000 .00 (20%)</span>
                                            </div>
                                        </div>

                                        <div class="row border-bottom border-dark">
                                            <div class="col-12 my-2">
                                                <span class="fs-5 text-primary"><b>Warrenty : </b>6 Months Warrenty</span><br />
                                                <span class="fs-5 text-primary"><b>Return Policy : </b>1 Months Return Policy</span><br />
                                                <span class="fs-5 text-primary"><b>In Stock : </b>10 Items Available</span>
                                            </div>
                                        </div>

                                        <div class="row border-bottom border-dark">
                                            <div class="col-12 my-2">
                                                <div class="row">
                                                    <div class="col-12 col-lg-6 border border-1 border-dark text-center">
                                                        <span class="fs-5 text-primary"><b>Seller : </b>Lahiru</span>
                                                    </div>
                                                    <div class="col-12 col-lg-6 border border-1 border-dark text-center">
                                                        <span class="fs-5 text-primary"><b>Sold : </b>100 Items</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="my-2 offset-lg-2 col-12 col-lg-8 border border-2 border-danger rounded">
                                                        <div class="row">
                                                            <div class="col-3 col-lg-2 border-end border-2 border-danger">
                                                                <img src="resources/pricetag.png" />
                                                            </div>
                                                            <div class="col-9 col-lg-10">
                                                                <span class="fs-5 text-danger fw-bold">
                                                                    Stand a chance to get 5% discount by using VISA or MASTER
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12 my-2">
                                                        <div class="row g-2">

                                                            <div class="border border-1 border-secondary rounded overflow-hidden 
                                                        float-left mt-1 position-relative product-qty">
                                                                <div class="col-12">
                                                                    <span>Quantity : </span>
                                                                    <input type="text" class="border-0 fs-5 fw-bold text-start" style="outline: none;" pattern="[0-9]" value="1" onkeyup='check_value(<?php echo $product_data["qty"]; ?>);' id="qty_input" />

                                                                    <div class="position-absolute qty-buttons">
                                                                        <div class="justify-content-center d-flex flex-column align-items-center 
                                                                border border-1 border-secondary qty-inc">
                                                                            <i class="bi bi-caret-up-fill text-primary fs-5" onclick='qty_inc(x);'></i>
                                                                        </div>
                                                                        <div class="justify-content-center d-flex flex-column align-items-center 
                                                                border border-1 border-secondary qty-dec">
                                                                            <i class="bi bi-caret-down-fill text-primary fs-5" onclick='qty_dec();'></i>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-12 mt-5">
                                                                    <div class="row">
                                                                        <div class="col-4 d-grid">
                                                                            <button class="btn btn-success" type="submit" id="payhere-payment">Buy Now</button>
                                                                        </div>
                                                                        <div class="col-4 d-grid">
                                                                            <button class="btn btn-primary">Add To Cart</button>
                                                                        </div>
                                                                        <div class="col-4 d-grid">
                                                                            <button class="btn btn-secondary">
                                                                                <i class="bi bi-heart-fill fs-4 text-danger"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 bg-white">
                        <div class="row d-block me-0 mt-4 mb-3 border-bottom border-1 border-dark">
                            <div class="col-12">
                                <span class="fs-3 fw-bold">Related Items</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 bg-white">
                        <div class="row g-2">
                            <div class="offset-1 offset-lg-0 col-4 col-lg-2">
                                <div class="card" style="width: 18rem;">
                                    <img src="resources/mobile-images/iphone12.jpg" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="row">
                            <div class="col-6">
                                <div class="row d-block me-0 mt-4 mb-3 border-bottom border-1 border-dark border-end">
                                    <div class="col-12">
                                        <span class="fs-4 fw-bold">Product Details</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="row d-block me-0 mt-4 mb-3 border-bottom border-end border-1 border-dark">
                                    <div class="col-12">
                                        <span class="fs-4 fw-bold">Feedbacks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-12 col-lg-6 bg-white">
                        <div class="row">

                            <div class="col-6">
                                <div class="row">
                                    <div class="col-3">
                                        <label class="form-label fs-4 fw-bold">Brand : </label>
                                    </div>
                                    <div class="col-9">
                                        <label class="form-label fs-4">Apple</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="row">
                                    <div class="col-3">
                                        <label class="form-label fs-4 fw-bold">Model : </label>
                                    </div>
                                    <div class="col-9">
                                        <label class="form-label fs-4">iPhone 12</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label fs-4 fw-bold">Description : </label>
                                    </div>
                                    <div class="col-12">
                                        <textarea cols="60" rows="10" class="form-control" readonly></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-lg-6">
                        <div class="row border border-1 border-dark rounded overflow-scroll me-0" style="height: 300px;">

                            <div class="col-12 mt-1 mb-1 mx-1">
                                <div class="row border border-1 border-dark rounded me-0">

                                    <div class="col-10 mt-1 mb-1 ms-0">John Doe</div>
                                    <div class="col-2 mt-1 mb-1 me-0">

                                        <span class="badge bg-success">Positive</span>
                                    </div>

                                    <div class="col-12">
                                        <b>
                                            Perfect
                                        </b>
                                    </div>
                                    <div class="offset-6 col-6 text-end">
                                        <label class="form-label fs-6 text-black-50">2023.09.13</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <?php include "footer.php"; ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <script src="script.js"></script>

</body>

</html>