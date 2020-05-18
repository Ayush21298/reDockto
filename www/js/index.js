/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var logged_in = false;

$(".available_toggle").click(function() {
  $(".available_toggle").toggle();
});

$(".sos_btn").click(function() {
  window.location = 'counsellor.html';
});

$(".goto_home").click(function() {
  $(".slide_window").animate({
        width: "toggle",
        opacity: "toggle",
      }, "slow");
  $(".slide_menu").toggle("slow");
});


String.prototype.format = function () {
        var a = this;
        for (var k in arguments) {
            a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
        }
        return a
    }

// var base_url = "http://127.0.0.1:8000/";
// var base_url = "http://192.168.43.156:8000/";
var base_url = "http://3.21.187.90:8000/";

var user_sign_in_url = base_url + "user/login/";
var user_register_url = base_url + "user/register/";
var user_update_url = base_url + "user/update/";

var user_send_otp_url = base_url + "user/send_otp/";
var user_get_otp_url = base_url + "user/get_otp/";

var video_get_url = base_url + "video/all/";
var video_upload_url = base_url + "video/upload/";

var therapy_get_url = base_url + "therapy/all/";
var therapy_upload_url = base_url + "therapy/upload/";

var audio_book_get_url = base_url + "audio_book/all/";
var audio_book_upload_url = base_url + "audio_book/upload/";

var expert_opinion_get_url = base_url + "expert_opinion/all/";
var expert_opinion_upload_url = base_url + "expert_opinion/upload/";

var doctor_get_url = base_url + "doctor/all/";

var patient_history_url = base_url + "counselling/patient/";

var appointment_view_url = base_url + "appointment/view/";
var appointment_add_url = base_url + "appointment/add/";

var doctor_history_url = base_url + "counselling/doctor/";


var payment_create_url = base_url + "payment/create/";
var payment_verify_url = base_url + "payment/verify/";


var doctor_phone_call = null;
var user_phone_call = null;
var call_id = null;


var update_call_details_url = base_url + "counselling/add_call/";
var get_call_url = base_url + "counselling/get_call/";
var ignore_call_url = base_url + "counselling/ignore_call/";
var missed_call_url = base_url + "counselling/missed_call/";
var start_call_url = base_url + "counselling/start_call/";
var end_call_url = base_url + "counselling/end_call/";


var admin_get_url = base_url + "user/admin/";

function sign_out() {
  setCookie("phone_no", "", 30);
  setCookie("name", "", 30);
  setCookie("email", "", 30);
  setCookie("dob", "", 30);
  setCookie("profession", "", 30);
  setCookie("wallet", "", 30);
  setCookie("address", "", 30);
  setCookie("doctor", "", 30);    
}

$(document).ready(function(){
  $(".slide_window").html("");

  var slide_window = `
        <div class="slide_logo">
            <img src="img/logo.png" class="slide_logo_img">
        </div>        
        <hr>
        <div class="slide_menu">
            <div class="slide_menu_options" onclick="window.location = 'home_main.html'">
                Home
            </div>
            <hr>
            <div class="slide_menu_options" onclick="window.location = 'support.html'">
                Support
            </div>
            <hr>
            <div class="slide_menu_options" onclick="window.location = 'profile.html'">
                Profile
            </div>
            <hr>
            <div class="slide_menu_options" onclick="sign_out(); window.location = 'sign_in.html'">
                Sign Out
            </div>
        </div>`

  $(".slide_window").html(slide_window);
});

function footer_btn_back(argument) {
  // window.history.back();
  var url = (window.location.pathname).split('/')
  url = url[url.length-1];

  var back_urls = {}

  // back_urls["add_appointment.html"] = "home.html";
  back_urls["admin.html"] = "home_main.html";
  // back_urls["agora_doctor.html"] = "home.html";
  // back_urls["agora_user.html"] = "home.html";
  back_urls["appointment_doctor.html"] = "home_doctor.html";
  back_urls["audio_book.html"] = "home.html";
  // back_urls["audio_book_old.html"] = "home.html";
  // back_urls["call2.html"] = "home.html";
  // back_urls["call.html"] = "home.html";
  back_urls["counselling_history_doctor.html"] = "home_doctor.html";
  back_urls["counsellor_feedback.html"] = "home.html";
  back_urls["counsellor.html"] = "home.html";
  // back_urls["current_session.html"] = "home.html";
  back_urls["doctopad_doctor.html"] = "home_doctor.html";
  // back_urls["doctor_call.html"] = "home.html";
  back_urls["expert_opinion.html"] = "home.html";
  back_urls["home_doctor.html"] = "home_main.html";
  back_urls["home.html"] = "home_main.html";
  back_urls["home_main.html"] = "home_main.html";
  back_urls["index.html"] = "home.html";
  // back_urls["intro.html"] = "home.html";
  // back_urls["intro_old.html"] = "home.html";
  // back_urls["patient_list.html"] = "home.html";
  back_urls["profile_doctor.html"] = "home_doctor.html";
  back_urls["profile.html"] = "home.html";
  back_urls["recharge_wallet.html"] = "home.html";
  back_urls["record_list.html"] = "home.html";
  back_urls["register.html"] = "home_main.html";
  back_urls["sign_in.html"] = "home_main.html";
  // back_urls["spec.html"] = "home.html";
  // back_urls["support.html"] = "home.html";
  back_urls["therapy.html"] = "home.html";
  back_urls["therapy_upload_doctor.html"] = "home_doctor.html";
  // back_urls["update_record.html"] = "home.html";
  // back_urls["user_call.html"] = "home.html";
  back_urls["video.html"] = "home.html";
  back_urls["video_upload_doctor.html"] = "home_doctor.html";
  // back_urls["view_history.html"] = "home.html";
  // back_urls["view_record.html"] = "home.html";
  back_urls["withdraw_wallet.html"] = "home_doctor.html";

  try {
    if(back_urls[url] != null)
      window.location.href = back_urls[url];
    else
      window.history.back();
  } catch {
    window.history.back();
  }
}

function footer_btn_home(argument) {
  window.location = "home_main.html"
}

function footer_btn_next(argument) {
  window.history.forward();
}