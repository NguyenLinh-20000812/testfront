<?php
include "header.php";
include "slider.php";
include "class/catery_class.php";

?>
<?php
$catery=new catery ;
if($_SERVER['REQUEST_METHOD']==='POST'){
    $catery_name=$_POST['catery_name'];
    $insert_catery =$catery -> insert_catery($catery_name);
}
// var_dump ($catery_name) --> xem thử thêm vào có dc k
?>
<div class="admin-content-right">
        <div class="admin-content-right-catory">
            <h1>Thêm danh mục</h1>
            <form action="" method="POST">
                <input name="catery_name" type="text" placeholder="Nhập tên danh mục">
                <button type="submit">Thêm </button>
            </form>
        </div>
    </div>
</section>
</body>
</html>