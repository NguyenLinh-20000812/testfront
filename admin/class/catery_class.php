<?php 
include "database.php";
?>
<?php 
class catery{
    private $db;
    public function __construct(){
        $this ->db=new Database();
    }
    public function insert_catery($catery_name){
        $query="INSERT INTO tbl_catery (catery_name) VALUES ('$catery_name')";
        $result=$this ->db ->insert($query);
        return $result;
    }
}
?>