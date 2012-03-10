<!--
*Source file : 車-model.svg
*List file : List.txt
*Product many files : x-model.svg
-->
<?
//$nb_ch_std = nombre de caratere dans le fichier source list.txt contenant les caractere chinois
$nb_ch_std = 300;
$dir = "test_folder/";
$done = array();
$k = 0; # for doublon entry
for ($i=0; $i<($nb_ch_std ); $i++)
{
	// get the character number i
	$fgc_list = mb_substr(file_get_contents("list.txt"), $i, 1, 'UTF-8');
	echo '['.$fgc_list.'] : ';
	// get content of generic file
	$fgc_std = file_get_contents("車-model.svg");
	// replace generic character by the current current of the list
	$nw_txt = str_replace("車", $fgc_list, $fgc_std);
	// write the altered text into file
	if (in_array($fgc_list, $done ))
	{
		$k++;
		$num = $k;
	} else
	{
		$num = '';
	}
	$nw_file = fwrite(fopen($dir.$num.$fgc_list."-model.svg", 'w+'), $nw_txt);
	if (file_exists($dir.$num.$fgc_list."-model.svg")) {
		$j = $i+1;
		echo $j."-file: ".$fgc_list."-model.svg created<br/>";
		$done[] = $fgc_list;
	}
	else {
		echo "error: ".$fgc_list."-model.svg NOT created<br/>";
	}
}
?>