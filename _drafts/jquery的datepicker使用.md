### 使用 jquery-ui 的 datepicker
- 文件结构
  主要是资源文件，样式要匹配。
  - css/
    - jquery-ui.min.css
    - images
  - js/
    - jquery-ui-1.10.4.custom.min.js
    - jquery.min.js
  - demo.html

- datepicker 的一些用法主要是通过配置文件进行的。
```
<input type="text" name="startDate" id="startDate" class="input start-date">
<input type="text" name="endDate" id="endDate" class="input end-date">
$( "#startDate" ).datepicker(); // 默认使用
$( "#startDate" ).datepicker({
  showOn: "button",
  buttonImage: "images/calendar.gif",
  buttonImageOnly: true,
  dateFormat: 'dd-mm-yy'
}); // 添加参数使用
```

- 改變大小：
.ui-datepicker {
  font-size: 12px;
}

- 使用 range
```
$(function() {
  $( "#startDate" ).datepicker({
    onClose: function( selectedDate ) {
      $( "#endDate" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#endDate" ).datepicker();
  
  <!-- 检测时间范围是否合法 -->
  $(".search-btn").on("click", function() {
    var startDate = $("#startDate").val();
    var endDate = $("#endDate").val();
    if (new Date(endDate) < new Date(startDate)) {
      alert('终止日期不能少于起始日期');
      return false;
    }
  })
});
```

http://www.iteye.com/topic/346737