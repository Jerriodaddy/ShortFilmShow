<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

	<!-- BEGIN PAGE HEADER-->
	<!-- BEGIN PAGE BAR -->
	<div class="page-bar">
	    <ul class="page-breadcrumb">
	        <li>
	            <span>Home</span>
	            <i class="fa fa-circle"></i>
	        </li>
	        <li>
	            <span>Film Management</span>
	            <i class="fa fa-circle"></i>
	        </li>
	        <li>
	            <span>Add Film</span>
	        </li>
	    </ul>
	</div>
	<!-- END PAGE BAR -->
	<!-- END PAGE HEADER-->
                        
	<div class="row">
    	<div class="col-md-12">
			<br/>
			<!-- 意见反馈 start -->
			<div class="tabbable-line boxless tabbable-reversed">
            	<div class="portlet box green-jungle">
                	<div class="portlet-title">
                    	<div class="caption">
                    		<i class="icon-plus"></i>Add Film
                    	</div>
					</div>
					
					<div class="portlet-body form">
					
	                    <!-- BEGIN FORM-->
	                    <form id="addVideoForm" class="form-horizontal">
		                    <div class="form-body">
		                    	
		                    	<!-- 上传者ID -->
		                        <input id="userId" name="userId" type="hidden" class="form-control" placeholder="">
		                        
		                    	<div class="form-group">
		                        	<label class="col-md-3 control-label"><span class="field-required"> * </span>Film Title:</label>
		                            <div class="col-md-4">
		                            	<div id="input-error">
		                            		<input id="videoName" name="videoName" type="text" class="form-control" placeholder="">
		                            	</div>
									</div>
								</div>
								
								<div class="form-group">
		                        	<label class="col-md-3 control-label"><span class="field-required"> * </span>Short Overview:</label>
		                            <div class="col-md-4">
		                            	<div id="input-error">
		                            		<input id="videoDesc" name="videoDesc" type="text" class="form-control" placeholder="">
		                            	</div>
									</div>
								</div>
								
								<!-- Should be a selector -->
								<div class="form-group">
		                        	<label class="col-md-3 control-label"><span class="field-required"> * </span>Film Category:</label>
		                            <div class="col-md-4">
		                            	<div id="input-error">
		                            		<input id="category" name="category" type="text" class="form-control" placeholder="">
		                            	</div>
									</div>
								</div>
								
								<div class="form-group">
		                        	<label class="col-md-3 control-label"><span class="field-required"> * </span>Film File:</label>
		                            <div class="col-md-4">
		                            	<div id="input-error">
		                            		<!-- 返回的视频数据库地址 -->
	                            			<!-- <input type="hidden" id="path" name="path" class="form-control"/> -->

											<input id="videoFile" type="file" name="videoFile" <%-- data-url="<%=request.getContextPath() %>/video/uploadVideo.action" --%> accept=".mp4"/>
											
											<div id="videoContent"></div>
	                            		</div>
									</div>
								</div>
								
								<div class="form-group">
		                        	<label class="col-md-3 control-label"><span class="field-required"> * </span>Cover File:</label>
		                            <div class="col-md-4">
		                            	<div id="input-error">
		                            	
											<input id="coverFile" type="file" name="coverFile" accept=".jpg, .jpeg, .png" onchange="showPreview(this)"/>
											
											<div id="coverContent">
												<img src="" id="picid" width="250" height="200">
											</div>
	                            		</div>
									</div>
								</div>
   
							</div>
	                                                        
							<div class="form-actions">
			                    <div class="row">
			                        <div class="col-md-offset-3 col-md-9">
			                            <button type="submit" class="btn green-jungle">Submit</button>
			                            <button type="reset" class="btn grey-salsa btn-outline">Reset</button>
			                        </div>
			                    </div>
							</div>
						</form>
						<!-- END FORM-->
					</div>
				</div>
			</div>
                            
		</div>
	</div>
	
<script type="text/javascript">

/* 	$("#file").fileupload({
		pasteZone: "#videoContent", //粘贴文件区域
		dataType: "json",
		url: $('#hdnContextPath').val() + '/video/uploadVideo.action',
		done: function(e, data) {
			console.log(data);
			
			if (data.result.status != '200') {
				alert("upload faild...");
			} else {
				var videoServer = $("#videoServer").val();
				var url = videoServer + data.result.data;
				$("#videoContent").html("<a href='" + url + "' target='_blank'>PLAY</a>");
				$("#path").attr("value", data.result.data);
			}
	
		}
	}); */
	
	//回显图片
	function showPreview(obj) {
		var pic = document.getElementById("picid");
		var file = obj;
		if (window.FileReader) {//chrome,firefox7+,opera,IE10+
			oFReader = new FileReader();
			oFReader.readAsDataURL(file.files[0]);
			oFReader.onload = function(oFREvent) {
				pic.src = oFREvent.target.result;
			};
		}
		else if (document.all) {
			file.select();
			file.blur();
			var reallocalpath = document.selection.createRange().text//IE下获取实际的本地文件路径
			pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\""
					+ reallocalpath + "\")";
			pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		}
		else if (file.files) {
			if (file.files.item(0)) {
				url = file.files.item(0).getAsDataURL();
				pic.src = url;
			}
		}
		console.log(pic.src);
	}

	var submitVideo = function() {

		$('#addVideoForm').ajaxSubmit({
			url : $('#hdnContextPath').val() + '/video/addVideo.action',
			type : 'POST',
			data : {

			},
			success : function(data) {

				if (data.status == 200 && data.msg == 'OK') {
					alert('Upload Film Success...')
				} else {
					alert('Upload Film Fail...')
				}

				$("#bgmListMenu").click();
			}
		});
	}

	$('#addVideoForm').validate({
		errorElement : 'span', //default input error message container
		errorClass : 'help-block', // default input error message class
		focusInvalid : false, // do not focus the last invalid input
		ignore : "", // validate all fields including form hidden input
		rules : {
			videoName : {
				required : true,
				rangelength : [ 1, 36 ]
			},
			videoDesc : {
				required : true,
				rangelength : [ 1, 255 ]
			},
			category : {
				required : false
			},
			/* path: {
				required: true
			 }, */
			videoFile : {
				required : true
			},
			coverFile : {
				required : true
			}
		},
		messages : {
			videoName : {
				required : "Can not be null.",
				rangelength : "Length limited in 1~36."
			},
			videoDesc : {
				required : "Let's say something about your excellent works.",
				rangelength : "Length limited in 1~255."
			},
			category : {
				required : "Can not be null."
			},
			videoFile : {
				required : "Can not be null."
			},
			coverFile : {
				required : "Can not be null."
			}
		},
		invalidHandler : function(event, validator) { //display error alert on form submit   
			$('.alert-danger', $('#addVideoForm')).show();
		},

		highlight : function(element) { // hightlight error inputs
			$(element).closest('.form-group').addClass('has-error'); // set error class to the control group
		},
		success : function(label) {
			label.closest('.form-group').removeClass('has-error');
			label.remove();
		},
		errorPlacement : function(error, element) {
			error.insertAfter(element.closest('#input-error'));
		},
		submitHandler : function(form) {
			// FIXME
			/* console.log($('#file'));
			console.log($('#file').val()); */
			console.log($('#coverFile'));
			submitVideo();
		}
	});
</script>
