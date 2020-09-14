<?php
$akaliInfo[0] = "Akali";
$akaliInfo[1] = "Akali description";
$akaliInfo[2] = "akali.jpg";

$yoneInfo[0] = "Yone";
$yoneInfo[1] = "Yone description";
$yoneInfo[2] = "yone.jpg";

$lissandraInfo[0] = "Lissandra";
$lissandraInfo[1] = "Lissandra description";
$lissandraInfo[2] = "lissandra.jpg";

function showChampInfo($champData){
    echo "<h4>".$champData[0]."</h4>
        <p>".$champData[1]."</p>
        <img src='../img/".$champData[2]."'>";
}

?>



<div class="row">
    <div class="col">
        <h4><?php echo $akaliInfo[0];?></h4>
        <p><?php echo $akaliInfo[1];?></p>
        <img src="../img/<?php $akaliInfo[2];?>">
    </div>
    <div class="col">
        <h4><?php echo $yoneInfo[0];?></h4>
        <p><?php echo $yoneInfo[1];?></p>
        <img src="../img/<?php $yoneInfo[2];?>">
    </div>
    <div class="col">
        <h4><?php echo $lissandraInfo[0];?></h4>
        <p><?php echo $lissandraInfo[1];?></p>
        <img src="../img/<?php $lissandraInfo[2];?>">
    </div>
</div>

<div class="row">
    <div class="col">
        <?php showChampInfo($akaliInfo);?>
    </div>
    <div class="col">
        <?php showChampInfo($yoneInfo);?>
    </div>
    <div class="col">
        <?php showChampInfo($lissandraInfo);?>
    </div>
</div>