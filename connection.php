<?php
    require_once("vendor/autoload.php");
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    class Database{
        public static $connection;
    
        public static function setUpConnection(){
            if(!isset(Database::$connection)){
                Database::$connection = new mysqli($_ENV["MYSQL_HOST"], $_ENV["MYSQL_USER"],$_ENV["MYSQL_PASSWORD"],$_ENV["MYSQL_DATABASE"],$_ENV["MYSQL_PORT"]);
            }
        }
    
        public static function iud($q){
            Database::setUpConnection();
            Database::$connection->query($q);
        }
    
        public static function search($q){
            Database::setUpConnection();
            $resultset = Database::$connection->query($q);
            return $resultset;
        }
    }

?>