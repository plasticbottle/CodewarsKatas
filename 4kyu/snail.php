<?php
function snail(array $array): array {
$result = [];
$blocker = -1;
$arrayLength = count($array);

if(isset($array[0][0])) {
    $result = (new SplFixedArray($arrayLength * $arrayLength))->toArray();
    $x = 0;
    $y = 0;
    $a = 1;
    $b = 0;
        for($i = 0; $i < count($result); ++$i) {
            $result[$i] = $array[$y][$x];
            $array[$y][$x] = $blocker;
            $x += $a; 
            $y += $b;
          
            if($a != 0 && ($x < 0 || $x >= $arrayLength || $array[$y][$x] == $blocker)) {
               $x += -$a; 
               $y += $a;
               $b = $a; 
               $a = 0;
            }
            else if($b != 0 && ($y < 0 || $y >= $arrayLength || $array[$y][$x] == $blocker)) {
               $x += -$b; 
               $y += -$b;
               $a = -$b; 
               $b = 0;
            }
        }
}
    return $result;
}

//for problem description: check snail.js
?>
