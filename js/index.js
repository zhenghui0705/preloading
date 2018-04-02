var LoaDing = (function() {
	// 定义变量
	var $Imgs, $index, $len, $btn , $count
	var Variablen = function() {
		$Imgs = [
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521637776636.jpg',
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521736333333.jpg',
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521736348026.jpg',
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521736211076.jpg',
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521736348026.jpg',
			'https://ssyer.oss-cn-hangzhou.aliyuncs.com/unsplash/0-API/1521378967857.jpg'
		]
		$index = 0
        $count = 0
		$len = $Imgs.length
		$btn = $('.btn')
        $progress = $('.progress')
	}

	// 主函数
	var Main = function() {
		$btn.click(function() {
			if ('prev' === $(this).data('control')) { //上一张
				$index = Math.max(0, --$index);
			} else { //下一张
				$index = Math.min($len - 1, ++$index)
			}
			document.title = ($index + 1) + '/' + $len
			$('#img').attr('src', $Imgs[$index])
		})
	}
	// 遍历
	var Traverse = function() {
        $.each($Imgs,function(i,src){
            var imgObj = new Image()
            $(imgObj).on('load',function(){
                $progress.html('加载中！' + Math.round(($count+1) / $len * 100) + '%')
                if($count >= $len - 1){
                    $('#loading').hide();
                    document.title = '1/' + $len
                }
                $count ++
            })
            imgObj.src = src
        })
	}
	// 执行函数
	var StartLoad = function() {
		Variablen()
		Main()
		Traverse()
	}
	return {
		StartLoad: StartLoad
	}
})();

$(function() {
	LoaDing.StartLoad()
})
