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
  alert("SOS will be integrated after backend !");
});

String.prototype.format = function () {
        var a = this;
        for (var k in arguments) {
            a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
        }
        return a
    }

// var base_url = "http://127.0.0.1:8000/";
var base_url = "http://192.168.43.156:8000/";

var user_sign_in_url = base_url + "user/login/";
var user_register_url = base_url + "user/register/";
var user_update_url = base_url + "user/update/";

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