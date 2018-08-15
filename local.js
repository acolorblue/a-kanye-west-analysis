// GLOBAL VARIABLES
var mac_os = $('.mac-os'),
    apple_media_file = $('.apple-media-file'),
    text_editor = $('.text-editor'),
    essay_title = "A Kanye West Analysis",
    parent_container = $('.text-editor .parent-container'),
    scroll_container = $('.text-editor .parent-container .scroll-container'),
    uncompleted = $('p.unread').length > 0, 
    completed = $('.text-editor').hasClass('completed');

 


// DEVICE SPECIFICATIONS
function userDeviceSpecifications() {
  if (computer) {
    function draggableApp() {
      $('.text-editor').draggable({
        handle: '.header',
        cursor: 'move', 
        drag: function(event, ui) {
          backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');
        }
      });
    } 
    draggableApp(); 

    if (firefox) {
      var browser_alert = document.createElement('div');
      browser_alert.className = 'browser-alert ab-mid';
      browser_alert.innerHTML = "Please use Chrome or Safari. Firefox has ugly scrollbars.";

      $('.menu-bar').remove();
      $('.desktop').remove();
      $('.mac-os').append(browser_alert);
    }
  }
  
  checkDeviceLength();
  
  if (device_width_longer) {
    manuallyCenter('.desktop', '.text-editor');
    $('.text-editor > .blur').removeClass('contain').addClass('cover');
  }
  
  if (device_height_longer) {
    $('.text-editor > .blur').removeClass('cover').addClass('contain');
  }
}
  
  
  
 
// FIRST IMPRESSION 
function firstImpressionContainer() { 
  /* firstImpression.js. Copyright (c) 2012 Rob Flaherty (@robflaherty). Licensed under the MIT and GPL licenses. */
  window.firstImpression = function(cookie, days) {
    var cookieMachine, getCookie, setCookie, checkUser;

    /* Plain JS port of jquery.cookie plugin. Copyright (c) 2010 Klaus Hartl (stilbuero.de). Dual licensed under the MIT and GPL licenses. */
    cookieMachine = function(key, value, options) {
      var expiration, result, time;

      if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = options || {};

        if (value === null || value === undefined) {
          options.expires = -1;
        }

        if (typeof options.expires === "number") {
          expiration = options.expires;
          time = options.expires = new Date();
          time.setTime(time.getTime() + expiration * 24 * 60 * 60 * 1000);
        }

        // Temporary fix for path problem
        options.path = "/";

        return (document.cookie = [
          encodeURIComponent(key),
          "=",
          encodeURIComponent(value),
          options.expires ? "; expires=" + options.expires.toUTCString() : "",
          options.path ? "; path=" + options.path : "",
          options.domain ? "; domain=" + options.domain : "",
          options.secure ? "; secure" : ""
        ].join(""));
      }

      result = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(
        document.cookie
      );
      return result ? decodeURIComponent(result[1]) : null;
    };

    /* Option defaults */
    if (cookie === undefined) {
      cookie = "_firstImpression";
    }

    if (days === undefined) {
      days = 730;
    }

    /* Delete cookie if either option is null */
    if (cookie === null) {
      cookieMachine("_firstImpression", null);
      return;
    }

    if (days === null) {
      cookieMachine(cookie, null);
      return;
    }

    /* Functions */
    getCookie = function() {
      return cookieMachine(cookie);
    };

    setCookie = function() {
      cookieMachine(cookie, true, { expires: days });
    };

    checkUser = function() {
      var status = getCookie();

      // Set cookie if new user
      if (!status) {
        setCookie();
      }

      return !status;
    };

    /* Return boolean */
    return checkUser();
  };
  
  
  if (firstImpression()) {
    console.log("New User");
    $('.loader').addClass('new-user');
    $('.loader .gta .skip-loader').remove();
  }
}




// LOADER
function loader() {
  function gta() {
    function removeInitialCover() {
      setTimeout(function() {
        $('.loader').addClass('uncovered');
      }, 1000);

      setTimeout(function() {
        $('.loader').removeClass('covered uncovered');
        addMoveLoop();
      }, 2000);
    }
    removeInitialCover();
    
    function infoContainer() {
      if (twitterInAppBrowser) {
        var native_browser;
        if (ios) {
          native_browser = "Safari";
        }
        if (android) {
          native_browser = "Chrome";
        }

        $('.open-in-native-browser').fadeIn(200);
        var leave_twitter_text = $('.open-in-native-browser').html();
        $('.open-in-native-browser').html(leave_twitter_text.replace("native browser", native_browser));
      } 
       
      if (ios) {
        $('.low-power-mode-alert').fadeIn(200);
      }  
    } 
    infoContainer();
    if (twitterInAppBrowser) {
      $('.michael.background-and-character-container').addClass('show');
      return;
    }
    
    function addMoveLoop() {
      checkDeviceLength();
      
      if (device_width_longer) {
        $('.gta .character').removeClass('move');
        
        setTimeout(function() {
          $('.gta .character').addClass('move'); 
        }, 100);
      }

      if (device_height_longer) {
        $('.gta .background, .gta .character').removeClass('move');
        
        setTimeout(function() {
          $('.gta .background, .gta .character').addClass('move');
        }, 100);
      }
    }
    
    function transitions() { 
      // MICHAEL 
      $('.gta .michael.background-and-character-container').addClass('show');
      // return;
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          if (!twitterInAppBrowser) {
            $('.loader .gta .skip-loader').fadeIn(200);
          }
          $('.gta .michael.background-and-character-container').removeClass('show');
        }
      }, 4150); 
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .michael.background-and-character-container').remove();
          addMoveLoop(); 
        }
      }, 5650);
      
      // TREVOR
      setTimeout(function() { 
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .trevor.background-and-character-container').addClass('show');
        }
      }, 6050);
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .trevor.background-and-character-container').removeClass('show');
        }
      }, 9200);
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .trevor.background-and-character-container').remove();
          addMoveLoop();
          if (!twitterInAppBrowser) {
            $('.loader .gta .skip-loader').fadeOut(200);
          }
          
          if (ios) {
            $('.gta .low-power-mode-alert').fadeOut(200);
          }
        }
      }, 10700);
      
      // FRANKLIN AND CHOP
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .franklin-and-chop.background-and-character-container').addClass('show');
        }
      }, 11100);
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          $('.gta .franklin-and-chop.background-and-character-container').removeClass('show');
        }
      }, 14250);
      setTimeout(function() {
        if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
          callRemainderFunctions();
          console.log("NOT SKIPPED ==  callRemainderFunctions();"); 
          $('.gta').removeClass('original');
          $('.gta .franklin-and-chop.background-and-character-container').remove();
          addMoveLoop();
        }
      }, 15750);
      
      // KANYE
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis');
          $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
          $('.kanye.background-and-character-container').addClass('show');
        }
      }, 16150);
      setTimeout(function() { 
        if (!$('.loader').hasClass('skipped')) {
          titleThenRemoveLoader();
        }
      }, 19500);
    }
    transitions(); 
    
    function titleThenRemoveLoader() {
      $('.gta .text-logo').text("A Kanye West Analysis");
      automatedText('.gta .text-logo', 2000, [''], 0, '-break-', 800);

      var loader_removal_interval = setInterval(loaderRemoval, 200);
      function loaderRemoval() {
        if ($('.gta .text-logo').text().includes("A Kanye West Analysis")) {
          window.clearInterval(loader_removal_interval);

          setTimeout(function() {
            $('.loader').addClass('hide');
          }, 1500); 

          setTimeout(function() {
            $('.loader').fadeOut(200);
          }, 4300);

          setTimeout(function() {
            $('.loader').remove();
          }, 4500);
        }
      }
    }
    
    function skipLoader() {
      $('.loader .gta .skip-loader').click(function() {
        $(this).removeClass('not-clicked');
        $('.loader').addClass('skipped');
        $('.gta .background-and-character-container').removeClass('show');
        $('.gta .skip-loader').fadeOut(200);
        if (ios) {
          $('.gta .low-power-mode-alert').fadeOut(200);
        }
        
        setTimeout(function() {
          $('.gta .skip-loader').remove();
        }, 200);
        
        setTimeout(function() {
          $('.gta .michael.background-and-character-container, .gta .trevor.background-and-character-container, .gta .franklin-and-chop.background-and-character-container').remove();
          $('.gta .background, .gta .character').removeClass('move');
          // setTimeout(function() { 
          callRemainderFunctions();
          console.log("SKIPPED ==  callRemainderFunctions();"); 
          // }, 2000);
        }, 1500); 
        
        setTimeout(function() {
          $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis');
          $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
          $('.kanye.background-and-character-container').addClass('show');
        }, 1900);
        
        setTimeout(function() {
          titleThenRemoveLoader();
        }, 3300);
      })
    } 
    skipLoader(); 
  }
  gta();
}


 

// DETECT SIZE CHANGE
function detectSizeChange() {    
  $('.mac-os, .text-editor').mutate('width height top left', function(el, info) {
    if (computer) {
      function draggableElement() {
        var element_is_being_dragged = $('.text-editor').hasClass('ui-draggable-dragging');
        var element_not_being_dragged = !element_is_being_dragged;

        if (element_not_being_dragged) {
          manuallyCenter('.desktop', '.text-editor');
        }
        
        if (element_is_being_dragged) {
          if (!$('.text-editor').hasClass('dragged')) {
            $('.text-editor').addClass('dragged');
          }
        }
      }
      draggableElement();
      
      function backgroundImageSizing() {
        if ($('.mac-os').width() < 1000) {
          $('.text-editor > .blur').removeClass('cover').addClass('contain');
        }

        if ($('.mac-os').width() >= 1000) {
          $('.text-editor > .blur').removeClass('contain').addClass('cover');
        }
      }
      backgroundImageSizing();
    }
    
    function deviceCurrentSize() {
      checkDeviceLength();
      
      if (device_width_longer) {
        $('body').removeClass('height-longer').addClass('width-longer');
        manuallyCenter('.desktop', '.text-editor');
        
        if ($('.apple-media-file').hasClass('world-clock')) {
          return;
        }
        
        if ($('.apple-media-file').hasClass('instagram-share')) {
          titleOverflow('.text-editor.instagram-share .title', '.text-editor.instagram-share .title-scroll');
        } 
         
        function ifVideoPlayerInTextEditor() {
          if ($('.scroll-container .media-container.visible').length == 1) {
            if ($('.text-editor').hasClass('instagram-share')) {
              return;
            } 
            
            var previous_block = $('.scroll-container .media-container.visible').prev('.block'),
                media_container = $('.scroll-container .media-container.visible'),
                media_container_height,
                main_controls = $('.text-editor .media-container .main-controls');
 
            setTimeout(function() {
              media_container_height = scroll_container.width() * 0.563278;
              media_container.removeClass('video-player').css('height', media_container_height);
              parent_container.append(media_container);
              text_editor.addClass('video-player').css('height', media_container_height);
              mac_os.addClass('dim');
              // main_controls.show();
              
              $(window).on('resize', function() {
                media_container_height = scroll_container.width() * 0.563278;
                media_container.css('height', media_container_height);
                text_editor.css('height', media_container_height);
              });
            }, 250);
          }
        }
        ifVideoPlayerInTextEditor();
        
        if (mobile) {
          $('.text-editor > .blur').removeClass('contain').addClass('cover');
        }
      }  
      
      if (device_height_longer) {
        $('body').removeClass('width-longer').addClass('height-longer');
        
        if ($('.text-editor').hasClass('instagram-share')) {
          setTimeout(function() {
            titleOverflow('.text-editor.instagram-share .title', '.text-editor.instagram-share .title-scroll');
          }, 1000);
        } 
 
        function ifVideoPlayerIsTextEditor() {
          if ($('.text-editor').hasClass('video-player')) {
            // if (scroll_container.is(':hidden')) {
            //   scroll_container.show();
            // }
            
            var text_editor_video_player = $('.text-editor.video-player'),
                main_controls = $('.text-editor .media-container .main-controls'),
                previous_block = $('.scroll-container p.read').last().parent('.block'),
                media_container = $('.media-container.visible');
            
            $(window).off('resize');
            text_editor_video_player.css('height', '90%');
            media_container.css('height', 'fit-content');
            previous_block.after(media_container);
            // main_controls.hide();
            text_editor_video_player.removeClass('video-player');
            mac_os.removeClass('dim');
          }
        }
        ifVideoPlayerIsTextEditor();
        
        if (mobile) {
          $('.text-editor > .blur').removeClass('cover').addClass('contain');
        }
      }
    }
    deviceCurrentSize();
      
    function menuBarZIndex() {
      if (!$('.text-editor').hasClass('video-player')) {
        $('.menu-bar').css('z-index', '3');
      }

      else if ($('.text-editor').hasClass('video-player')) {
        $('.menu-bar').css('z-index', '0');
      }
    }
    menuBarZIndex();
    
    backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');
    automatedScrollAdjustment();
  });
}

 


// USER ACTIVE STATUS
function userActiveStatus() {    
  $(window).focus(); 
  
  $(window).on('blur', function() {
    if (mobile) {
      // alert("The webpage was paused because you were offline.");
    }
  });
}




// MENU BAR 
function menuBar() {
  $('.menu-bar .section-container > button').click(function(event) {
    var section_container = $(this).parent(),
        button = $(this),
        menu = $(this).next('.menu'),
        this_is_selected = section_container.hasClass('selected'),
        this_is_not_selected = !this_is_selected,
        selected_exists = $('.menu-bar .section-container.selected').length == 1,
        apple_menu = button.hasClass('apple-logo'),
        date_and_time = button.hasClass('time'),
        profile = button.hasClass('name'),
        notification_center = button.hasClass('notification-center');
    
    if (selected_exists) {
      $('.menu-bar .section-container').removeClass('selected');
    }
    
    if (this_is_not_selected) {
      section_container.addClass('selected');
    }
    
    
    // APPLE MENU 
    if (apple_menu) {
      function appleMenu() {

      }
      appleMenu();
    }
    
    
    // DATE AND TIME
    if (date_and_time) {
      function dateAndTime() {
        $('.date-and-time .menu .item').click(function() {
          var this_item = $(this),
              menu = this_item.parent(),
              title_button = menu.prev('button'),
              analog_clock = $(this).hasClass('analog-clock'),
              digital_clock = $(this).hasClass('digital-clock'),
              location_and_time_preferences = $(this).hasClass('location-and-time-preferences');

          
          function analogOrDigital() {
            var digital_text = title_button.find('.text');
            
            if (analog_clock || digital_clock) {
              if ($('.date-and-time .menu .item').hasClass('checked icons-b abs')) {
                $('.date-and-time .menu .item').removeClass('checked icons-b abs');
              }
            }
            
            if (analog_clock) {
              $('.mac-os .digital .text').hide();
              this_item.addClass('checked icons-b abs');
              title_button.removeClass('digital').addClass('analog');
              $('.mac-os .analog .clock-border').show();
              
              var clock_border = document.createElement('div');
                  clock_border.className = 'clock-border';
              
              var hour = document.createElement('div');
                  hour.className = 'hour hand ab-mid';
              
              var minute = document.createElement('div');
                  minute.className = 'minute hand ab-mid';

              if ($('.analog .clock-border').length == 0) {
                title_button.append(clock_border);
                clock_border.append(hour);
                clock_border.append(minute);
              }
            }

            if (digital_clock) {
              $('.mac-os .analog .clock-border').hide();
              this_item.addClass('checked icons-b abs');
              title_button.removeClass('analog').addClass('digital');
              $('.mac-os .digital .text').show();
            }
          }
          analogOrDigital();
          
          
          function worldClock() {
            if (location_and_time_preferences) {
              function removeAllOtherApps() {
                if ($('.text-editor').hasClass('instagram-share')) {
                  $('.text-editor img.poster').remove();
                  $('.share.call-to-action-controls').hide();
                  $('.text.call-to-action-controls').show();
                  $('.text.call-to-action-controls .search, .text.call-to-action-controls .credits').show();
                  if ($('.text-editor > .header .title-scroll').hasClass('overflow')) {
                    $('.text-editor > .header .title-scroll')[1].remove();
                    $('.text-editor > .header .title-scroll').removeClass('overflow');
                  }
                  $('.text-editor > .header .title-scroll').text(essay_title);
                  $('.text-editor').removeClass('instagram-share');
                } 
              }
              removeAllOtherApps();
              
              function buildWorldClock() {
                apple_media_file.addClass('world-clock');
                scroll_container.hide();
                $('.clock.call-to-action-controls').show();
                parent_container.prepend($('.timezones'));
                $('.apple-media-file > .header .title-scroll').text("World Clock");
                $('.apple-media-file .text.call-to-action-controls').hide();
              }
              buildWorldClock();
               
              $('.world-clock .exit').click(function() {
                function exitFunction() {
                  $('.item.location-and-time-preferences').append($('.timezones'));
                  $('.clock.call-to-action-controls').hide();
                  $('.apple-media-file > .header .title-scroll').text(essay_title);
                  apple_media_file.removeClass('world-clock');
                  $('.apple-media-file .text.call-to-action-controls').show();
                  scroll_container.show();
                  automatedScrollAdjustment();
                }
                exitFunction();
              });
            }
          }
          worldClock();
        })
      }
      dateAndTime(); 
    }
      
    
    // PROFILE
    if (profile) {
      function profile() {
        $('.accounts button').click(function() {
          var twitter = $(this).hasClass('twitter-b'),
              instagram = $(this).hasClass('instagram-b'),
              tumblr = $(this).hasClass('tumblr-b');

          if (twitter) {
            window.open("https://twitter.com/acolorblue");
          }

          if (instagram) {
            window.open("https://instagram.com/acolorblue");
          }

          if (tumblr) {
            window.open("https://acolorblue.tumblr.com");
          }
        })
      }
      profile();
    }
    
    
    // NOTIFICATION CENTER
    if (notification_center) {
      function noticationCenter() {
        var twitter_iframe_doesnt_exist = $('iframe.twitter-timeline').length == 0;
        if (twitter_iframe_doesnt_exist) {
          function dimensionsAdjust() {
            var iframe_height_interval = setInterval(iframeHeight, 1),
                desktop_height,
                header_height,
                twitter_timeline,
                timeline_height,
                heights_are_equal;
            
            function iframeHeight() {
              // console.log("YEER");
              
              desktop_height = $('.mac-os .desktop').height();
              // console.log("desktop_height = " + desktop_height);
              menu.css('height', desktop_height);
              $('.twitter-timeline').css('height', desktop_height);
              heights_are_equal = $('iframe.twitter-timeline').height() == $('.mac-os .desktop').height();
              
              if (heights_are_equal) {
                setTimeout(function() {
                  window.clearInterval(iframe_height_interval);
                  
                  $('.twitter-timeline').css('height', $('.desktop').height());
                  menu.removeClass('cover twitter-b icons-b abs');
                }, 900);
              }
            }
            
            $(window).on('resize', function() {
              iframeHeight();
            });
          }
          dimensionsAdjust();

          function embedContent() {
            !function(d, s, id) {
              var js,
                  fjs = d.getElementsByTagName(s)[0],
                  p = /^http:/.test(d.location)?'http':'https';

              if (!d.getElementById(id)) {  
                js = d.createElement(s); 
                js.id = id; 
                js.src = p + "://platform.twitter.com/widgets.js"; 
                fjs.parentNode.insertBefore(js, fjs);
              }
            }
            (document,"script","twitter-wjs");
          }
          embedContent();
        } 
      }
      noticationCenter();
    }
    
    event.stopPropagation();
  })
}



 
// BACKGROUND IMAGE BLUR
function backgroundImageBlur(container, element, blur, source) {
  var container_image_source;
  
  if (source == 'background-image') {
    container_image_source = $(container).css('background-image');
  }
  
  if (source == 'image-tag') {
    container_image_source = $(container).prop('src');
  }
  
  var css_centered = $(element).css('top') == $(element).css('bottom') && $(element).css('right') == $(element).css('left');
  var not_css_centered = $(element).css('top') != $(element).css('bottom') && $(element).css('right') != $(element).css('left');
  
  var container_width = $(container).width(),
      container_height = $(container).height(),
      blur_width = $(blur).width(),
      blur_height = $(blur).height();
      
  var element_top_position,
      element_right_position,
      element_bottom_position,
      element_left_position,
      draggable = $(element).hasClass('ui-draggable'),
      not_draggable = !draggable;

  if (not_css_centered || draggable) {
    element_top_position = $(element).css('top');
    element_right_position = $(element).css('right');
    element_bottom_position = $(element).css('bottom');
    element_left_position = $(element).css('left');
    
    element_top_position = parseInt(element_top_position) + 'px';
    element_right_position = parseInt(element_right_position) + 'px';
    element_bottom_position = parseInt(element_bottom_position) + 'px';
    element_left_position = parseInt(element_left_position) + 'px';
  } 
  
  else if (css_centered || not_draggable) {
    element_top_position = $(element).css('margin-top');
    element_right_position = $(element).css('margin-right');
    element_bottom_position = $(element).css('margin-bottom');
    element_left_position = $(element).css('margin-left');
    
    element_top_position = parseInt(element_top_position) + 'px';
    element_right_position = parseInt(element_right_position) + 'px';
    element_bottom_position = parseInt(element_bottom_position) + 'px';
    element_left_position = parseInt(element_left_position) + 'px';
  }
  
  if (container == '.mac-os') { 
    var menu_bar_height = $('.menu-bar').height();
    element_top_position = parseInt(element_top_position) + parseInt(menu_bar_height) + 'px';
  }

  var blur_top_position = '-' + element_top_position,
      blur_left_position = '-' + element_left_position,
      blur_background_image = $(blur).css('background-image');
  
  var centered = Math.round(element_top_position) == Math.round(element_bottom_position) && Math.round(element_right_position) == Math.round(element_left_position);
  
  var not_centered = Math.round(element_top_position) != Math.round(element_bottom_position) && Math.round(element_right_position) != Math.round(element_left_position);
  
  var not_same_image = blur_background_image != container_image_source,
      not_same_size = blur_width != container_width || blur_height != container_height,
      not_same_position = '+' + blur_top_position != element_top_position  || '+' + blur_left_position != element_left_position;
  
  if (not_same_image) {
    if (source == 'background-image') {
      $(blur).css('background-image', container_image_source);
    }
    
    if (source == 'image-tag') {
      $(blur).css('background-image', "url(" + container_image_source + ")");
    }
  }
  
  if (not_same_size) {
    $(blur).css('width', container_width);
    $(blur).css('height', container_height);
  }
  
  if (not_same_position) {
    $(blur).css('top', blur_top_position);
    $(blur).css('left', blur_left_position);
    
    if (container == '.mac-os') {
      $(blur).css('margin', '0px');
    }
  }
}




// CLOSE TEXT EDITOR
function closeTextEditor() {
  $('.text-editor .close').click(function() {
    $(this).parents('.text-editor').addClass('hide');
    $('video').each(function() {
      var media_container = $(this).parents('.media-container');
      var video = $(this).get(0);
      if (!video.paused) {
        video.pause(); 
        media_container.find('.pause').removeClass('pause').addClass('play');
      }
    });
    $('.file').removeClass('selected');
    
    if ($('.mac-os').hasClass('dim')) {
      $('.mac-os').removeClass('dim');
    }

    var screensaver_credits = document.createElement('span');
        screensaver_credits.className = 'screensaver-credits ab-mid';
        screensaver_credits.innerHTML = "Sahel, Mali by Steve McCurry, 1986.";
    
    if ($('.screensaver-credits').length == 0) {
      $('.mac-os').append(screensaver_credits);
    }
    
    setTimeout(function () {
      $('.screensaver-credits').addClass('show');
    }, 100);
  })
}

 


// SEARCH TEXT EDITOR
function searchTextEditor() {
  $('.text-editor .search').click(function() {
    var search_bar = document.createElement('input');
        search_bar.className = 'search-bar hide';
        search_bar.placeholder = "Spotlight Search";

    var original_content = $('.text-editor .parent-container').html(),
        original_children = $('.text-editor .parent-container').children();

    if ($('.search-bar').length == 1) {
      $('.search-bar').val("");
      $('.text-editor p').show();
      $('.text-editor .media-container.watched').show();
      $('.search-bar').addClass('hide');
      setTimeout(function() {
        $('.search-bar').remove();
        $('.text-editor > .header .title').show();
        return; 
      }, 100); 
    }

    if ($('.search-bar').length == 0) {
      uncompleted = $('p.unread').length > 0, 
        completed = $('.text-editor').hasClass('completed');
      
      if (uncompleted) {
        $('.text-editor > .header .title-scroll').text("Damn Finish Reading First");
        
        setTimeout(function() {
          if ($('.text-editor > .header .title-scroll').text() != "Damn Finish Reading First") {
            return;   
          } 
          
          else if (!$('.text-editor').hasClass('video-player')) {
            $('.text-editor > .header .title-scroll').text(essay_title);
          }
        }, 2500);
      } 
      
      if (completed) {
        $('.text-editor > .header .main-controls').after(search_bar);
        $('.text-editor > .header .title').hide();
        setTimeout(function() {
          $('.search-bar').removeClass('hide');
        }, 100);
      }
    }

 
    // SEARCH FUNCTION
    $('.search-bar').keyup(function() {
      var entered_value = $(this).val().toLowerCase();
      var entered_value_global = new RegExp(entered_value, "g");
      var no_value = entered_value == '';
      

      $('.text-editor p').each(function() {
        var paragraph_original = $(this).text();
        var paragraph_lowercase = paragraph_original.toLowerCase();
        var paragraph_highlight = paragraph_lowercase.replace(entered_value_global, '<span class=\'highlight\'>' + entered_value + '</span>');

        if (!paragraph_lowercase.includes(entered_value)) {
          $(this).hide();
        }

        if (paragraph_lowercase.includes(entered_value)) {
          $(this).show();
          $(this).html(paragraph_highlight);
        }

        if (no_value) {
          $('.text-editor .parent-container').html(original_content);
        }
      });
      
      $('.media-container').each(function() {
        if ($(this).is(':visible')) {
          if (entered_value.length > 0) {
            $(this).hide();
          }

          if (no_value) {
            $(this).show();
          }
        }
      });
    })
  })
}




// SHARE PAGE
function sharePage() {
  $('.text-editor .share').click(function(event) {
    var social_share_container = document.createElement('div');
        social_share_container.className = 'social-share-container hide';

    var social_share = document.createElement('button');

    if ($('.social-share-container').length == 1) {
      $('.social-share-container').addClass('hide');
      
      setTimeout(function() {
        $('.social-share-container').remove();
        $('button.search').show();
        if ($('button.credits').is(':hidden') && $('.text-editor').hasClass('completed')) {
          $('button.credits').show();
        }
        return; 
      }, 100);
    }

    if ($('.social-share-container').length == 0) {
      if ($('.search-bar').length == 1) {
        $('.search-bar').addClass('hide');
        setTimeout(function() {
          $('.search-bar').remove();
          $('.text-editor .title').show();
        }, 100); 
      }
     
      $('button.search').hide();
      if ($('button.credits').is(':visible')) {
        $('button.credits').hide();
      }
      $('.text.call-to-action-controls').prepend(social_share_container);
      setTimeout(function() {
        $('.social-share-container').removeClass('hide');
      }, 100);

      social_share.className = 'twitter-b icons-b abs';
      social_share_container.append(social_share.cloneNode(true));

      social_share.className = 'instagram-b icons-b abs';
      social_share_container.append(social_share.cloneNode(true));

      social_share.className = 'tumblr-b icons-b abs';
      social_share_container.append(social_share.cloneNode(true));
    }


    // SOCIAL SHARE FUNCTION
    $('.social-share-container button').click(function(event) {
      var poster_link = "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/0.%20Poster/Portrait%20-%201%20-%20Comp.jpg", 
          webpage = 'https://acolorblue.co/a-kanye-west-analysis',
          line_break = '%0A',
          caption = "A Kanye West Analysis, by @acolorblue.",
          window_link;

      var poster = document.createElement('img');
          poster.className = 'poster';
          poster.src = poster_link;

      var call_to_action = document.createElement('button');
      
      var twitter = $(this).hasClass('twitter-b'),
          instagram = $(this).hasClass('instagram-b'),
          tumblr = $(this).hasClass('tumblr-b');

      if (twitter) {
        window_link = 'https://twitter.com/intent/tweet?source=webclient&text=' + caption + line_break + webpage;
        window.open(window_link);
      }

      if (instagram) {
        window_link = 'instagram://camera';
        if (android) {
          window_link = 'https://www.instagram.com/_u/acolorblue';
        }
  
        function removeSearchBar() {
          if ($('.search-bar').length == 1) {
            $('.search-bar').addClass('hide');
            setTimeout(function() {
              $('.search-bar').remove();
              $('.text-editor .title').show();
            }, 100);
          } 
        }
        removeSearchBar();

        function closeInstagramShare() {
          poster.remove();
          $('.share.call-to-action-controls').hide();
          if ($('.text-editor > .header .title-scroll').hasClass('overflow')) {
            $('.text-editor > .header .title-scroll')[1].remove();
            $('.text-editor > .header .title-scroll').removeClass('overflow');
          }
          $('.text-editor > .header .title-scroll').text(essay_title);
          $('.text-editor').removeClass('instagram-share');
          $('.text.call-to-action-controls, .text.call-to-action-controls .search').show();
          if ($('button.credits').is(':hidden') && $('.text-editor').hasClass('completed')) {
            $('button.credits').show();
          }
          $('.text-editor .scroll-container').show();
          automatedScrollAdjustment();
        }

        function imagePreviewApp() {
          $('.text-editor').addClass('instagram-share');
          $('.text-editor .scroll-container').hide();
          $('.text-editor .parent-container').prepend(poster);
          $('.text-editor > .header .title-scroll').text("Save Image Then Confirm");
          $('.text.call-to-action-controls').hide();

          var call_to_action_controls = document.createElement('div');
              call_to_action_controls.className = 'call-to-action-controls share';

          var call_to_action = document.createElement('button');

          $('.text-editor > .header .top-bar').append(call_to_action_controls);
          call_to_action.className = 'confirm-action';
          call_to_action.innerHTML = "Confirm";
          call_to_action_controls.prepend(call_to_action.cloneNode(true));
          $('.share .confirm-action').click(function() {
            window.location.href = window_link;
            closeInstagramShare();
          });

          call_to_action.className = 'cancel-action';
          call_to_action.innerHTML = "Cancel";
          call_to_action_controls.append(call_to_action.cloneNode(true));
          $('.share .cancel-action').click(function() {
            closeInstagramShare();
          });
        }
        imagePreviewApp(); 
        
        setTimeout(function() {
          titleOverflow('.text-editor.instagram-share .title', '.text-editor.instagram-share .title-scroll');
        }, 1000);
      }

      if (tumblr) {
        window_link = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + poster_link + '&caption=' + '<a href=\''+  webpage + '\'>' + '<i>' + caption.slice(0, 21) + '</i></a>' + caption.slice(21);
        
        window.open(window_link);
      }

      $('.social-share-container').remove();
      $('button.search').show();
    })
  })
}


 

// MEDIA PRELOADS
function mediaPreloads() {
  function menuSections() {
    $('.panel .section-container').each(function() {
      $(this).addClass('selected');

      setTimeout(function() {
        $('.panel .section-container').removeClass('selected');
      }, 1000);
    })
  }
  menuSections();
  
  function essayContent() {
    // scroll_container.addClass('show');
    
    $('video').each(function() {
      $(this).attr('preload', 'auto');
    })
    
    // setTimeout(function() {
    //   scroll_container.removeClass('show');
    // }, 1000);
  }
  essayContent();
  
  
  
  function worldClock() {
    function build() {
      apple_media_file.addClass('world-clock');
      scroll_container.hide();
      $('.clock.call-to-action-controls').show();
      parent_container.prepend($('.timezones'));
      $('.apple-media-file > .header .title-scroll').text("World Clock");
      $('.apple-media-file .text.call-to-action-controls').hide();
      
      function exit() {
        var call_to_action_controls = document.createElement('div');
            call_to_action_controls.className = 'call-to-action-controls clock';

        var call_to_action = document.createElement('button');

        $('.apple-media-file > .header .top-bar').append(call_to_action_controls);
        call_to_action.className += ' exit';
        call_to_action.innerHTML = "Exit";
        call_to_action_controls.prepend(call_to_action);
      }
      exit();
    }
    build();
    
    setTimeout(function() {
      $('.item.location-and-time-preferences').append($('.timezones'));
      $('.clock.call-to-action-controls').hide();
      $('.apple-media-file > .header .title-scroll').text(essay_title);
      apple_media_file.removeClass('world-clock');
      $('.apple-media-file .text.call-to-action-controls').show();
      scroll_container.show();
      automatedScrollAdjustment();
    }, 1000);
  }
  worldClock();
} 




// AUTOMATED TEXT
function automatedText(selector, timeBetweenText, exclude, timeBeforeStart, breakWord, breakTime) {
  var booSkipAutomatedText = false;

  if (selector == null || selector.trim() == '') {
    return;
  }
    
  timeBetweenText = (timeBetweenText == null ? 0 : timeBetweenText);
  timeBeforeStart = (timeBeforeStart == null ? 0 : timeBeforeStart);
  let textInfo = {
    selector: selector,
    timeBetweenText: timeBetweenText,
    exclude: exclude,
    timeBeforeStart, timeBeforeStart
  }
 
  if (breakWord != null) {
    textInfo['breakWord'] = breakWord;
    textInfo['breakTime'] = (breakTime == null ? 0 : breakTime);
  }
 
  setTimeout(function() {
    automaticText(textInfo);
  }, textInfo.timeBeforeStart);

  function automaticText(objTextInfo) {
    // let $lines = document.querySelectorAll(objTextInfo.selector),
    let $lines = $(objTextInfo.selector),
        lineContents = new Array(), 
        lineCount = $lines.length; 
 
    var skip = 0; 
   
    for (var i = 0; i < lineCount; i++) {  
      lineContents[i] = $($lines[i]).text(); 
      $($lines[i]).text('');
      $($lines[i]).css('visibility', 'visible');
      $($lines[i]).css('display', 'block');
    }
    typeLine();

    function typeLine(idx) { 
      idx == null && (idx = 0);
      var element = $lines[idx];
      var content = lineContents[idx];

      if (typeof content == "undefined") {
        let elClassSkip = $('.skip');
        let lengthClassSkip = elClassSkip.length;

        while (lengthClassSkip--) {
          $(elClassSkip[lengthClassSkip]).css('display', 'none');
        }
        return;
      }

      var booExclude = false;

      if (objTextInfo.exclude != null) {
        $(element).each(function(elementClass) {
          if (!booExclude) { 
            booExclude = objTextInfo.exclude.includes(elementClass); 
          }
        });

        booExclude = (booExclude || !booExclude && objTextInfo.exclude.includes(element.tagName.toLowerCase()));
      }

      var charIdx = 0; 

      if (booExclude || booSkipAutomatedText) {
        $(element).text(content);
        typeLine(++idx);
      } 
      else {
        content = '' + content + '';
        element.appendChild(document.createTextNode(' '));
        element.className += ' active opened';
        typeChar();
      }

      function typeChar() {
        var rand = (!booSkipAutomatedText ? Math.round(Math.random() * 60) + 25 : 0);

        setTimeout(function () {
          var char = content[charIdx++],
              booBreak = false;

          if (objTextInfo.breakWord != null && char == objTextInfo.breakWord.charAt(0) && content.substring(charIdx - 1, charIdx + objTextInfo.breakWord.length - 1) == objTextInfo.breakWord) {
            content = content.replace(objTextInfo.breakWord, '');
            char = content[charIdx - 1];
            booBreak = true;
          }
          setTimeout(function () {
            if (typeof char !== "undefined") {
              element.appendChild(document.createTextNode(char));
              typeChar();
            }
            else { 
              $(element).removeClass('active unread').addClass('read');
              
              setTimeout(function () {
                typeLine(++idx);
              }, (!booSkipAutomatedText ? objTextInfo.timeBetweenText : 0));
            }
          }, (booBreak && !booSkipAutomatedText ? objTextInfo.breakTime : 0))
        }, rand);
      }
    }
  }
  
  function detectHeightChange() {
    $('.scroll-container').mutate('height', function(el, info) {
      automatedScrollAdjustment();
    });
  }
  detectHeightChange();
  
  $('button.search').click(function() {
    booSkipAutomatedText = true;
  })
}




// MEDIA AFTER PARAGRAPHS
function mediaAfterParagraphs() {
  var current_paragraph,
      media_container,
      media_container_height,
      media,
      blur,
      thumbnail,
      header_height,
      main_controls,
      main_controls_buttons,
      video_call_to_action_controls, 
      post_link,
      title_container,
      title_scroll, 
      video,
      video_title, 
      video_link, 
      previous_block,
      next_block,
      next_paragraph,
      next_block_paragraphs, 
      next_block_interval,
      next_block_function,
      first_block_interval, 
      second_block_interval,
      third_block_interval,
      fourth_block_interval,
      fifth_block_interval,
      sixth_block_interval,
      seventh_block_interval,
      eight_block_interval,
      ninth_block_interval,
      tenth_block_interval,
      eleventh_block_interval,
      ending_interval;
        
  
  function videoPlayer() {    
    function preparations() { 
      function ifHidden() {
        if ($('.text-editor').hasClass('hide')) {
          $('.text-editor').removeClass('hide');
          $('.screensaver-credits').removeClass('show');
        }
      }
      ifHidden();
      
      function removeAllOtherApps() {
        if ($('.text-editor').hasClass('instagram-share') && $('body').hasClass('width-longer')) {
          $('.text-editor img.poster').remove();
          $('.share.call-to-action-controls').hide();
          $('.text.call-to-action-controls').show();
          $('.text.call-to-action-controls .search').show();
          if ($('.text-editor > .header .title-scroll').hasClass('overflow')) {
            $('.text-editor > .header .title-scroll')[1].remove();
            $('.text-editor > .header .title-scroll').removeClass('overflow');
          }
          $('.text-editor > .header .title-scroll').text(essay_title);
          $('.text-editor').removeClass('instagram-share');
        } 
        
        
        if ($('.apple-media-file').hasClass('world-clock') && $('body').hasClass('width-longer')) {
          $('.item.location-and-time-preferences').append($('.timezones'));
          $('.clock.call-to-action-controls').hide();
          $('.apple-media-file > .header .title-scroll').text(essay_title);
          apple_media_file.removeClass('world-clock');
          $('.apple-media-file .text.call-to-action-controls').show();
          scroll_container.show();
          automatedScrollAdjustment();
        } 
      }
      removeAllOtherApps();
      
      function pauseAllessayContent() {
        $('video').each(function() {
          var video = $(this).get(0),
              thumbnail = $(this).prev('.thumbnail');

          if (!video.paused) {
            video.pause(); 
            thumbnail.fadeIn(200);
          }
        });
      }
      pauseAllessayContent();
    }
    preparations(); 
    
    function build() {
      var call_to_action = document.createElement('button');
          call_to_action.className = 'white icons-b abs';
      
      media_container = video.parents('.media-container');
      media = media_container.find('.media');
      thumbnail = media_container.find('.thumbnail');
      main_controls = media_container.find('.main-controls');
      main_controls_buttons = main_controls.children('button');
      video_call_to_action_controls = media_container.find('.video.call-to-action-controls');
      post_link = video_call_to_action_controls.find('.post-link');
      blur = media_container.find('.blur');
      previous_block = media_container.prev('.block');
      next_block = media_container.next('.block');
      next_paragraph = next_block.find('p:first-child');
      
      function controlsBackgroundColor() {
        thumbnail.primaryColor(function(color) {
          $(main_controls_buttons).css('background-color', 'rgb('+ color +', 0.7)');
          $(video_call_to_action_controls).css('background-color', 'rgb('+ color +', 0.7)');
        });
      }
      
      function videoLoader() {
        var video_loader = document.createElement('img');
            video_loader.className = 'video-loader ab-mid hide'; 
            video_loader.src = "https://raw.githubusercontent.com/acolorblue/acolorblue.github.io/gh-pages/Design%20Icons/Video%20Loader/1.gif";
        
        if ($('.video-loader').length == 0) {
          media.prepend(video_loader);
        }
      }
      
      function calcHeightWithScrollContWidthRatio(element) {
        var scroll_container_width = $('.scroll-container').width();
            media_container_height = scroll_container_width * 0.563278;
        
        $(element).css('height', media_container_height);
      }
      
      function blurAdjust() {
        $(media_container).mutate('width height', function(el, info) {
          backgroundImageBlur(thumbnail, video_call_to_action_controls, blur, 'image-tag');
        });
      }
      
      function displayMediaPlayer() {
        checkDeviceLength();
 
        if (device_width_longer) {
          calcHeightWithScrollContWidthRatio(media_container);
          media_container.slideDown(500).addClass('visible');
          // media_container.show(500).addClass('visible');
          parent_container.append(media_container);
  
          setTimeout(function() {
            text_editor.addClass('video-player');
            calcHeightWithScrollContWidthRatio(text_editor);
            calcHeightWithScrollContWidthRatio(media_container);
            backgroundImageBlur(thumbnail, video_call_to_action_controls, blur, 'image-tag');
            blurAdjust();
            controlsBackgroundColor();
          }, 700);

          setTimeout(function() {
            videoLoader();
            mac_os.addClass('dim');
            
            $(window).on('resize', function() {
              calcHeightWithScrollContWidthRatio(text_editor);
              calcHeightWithScrollContWidthRatio(media_container);
            });
          }, 900);
        } 

        if (device_height_longer) { 
          // main_controls.hide();
          media_container.fadeIn(200).addClass('video-player visible');
          backgroundImageBlur(thumbnail, video_call_to_action_controls, blur, 'image-tag');
          blurAdjust();
          controlsBackgroundColor();
          videoLoader();
        } 
        
        function videoEnded() {
          video.bind('ended', function() { 
            device_width_longer = $('body').width() > $('body').height();
            device_height_longer = $('body').height() > $('body').width();
            
            if (device_width_longer) {
              if (next_paragraph.is(':hidden') || !media_container.hasClass('watched')) {
                setTimeout(function() {
                  text_editor.css('height', '90%'); 
                  text_editor.removeClass('video-player');
                  media_container.addClass('video-player');
                  media_container.css('height', 'fit-content'); 
                }, 1000);

                setTimeout(function() {
                  mac_os.removeClass('dim');
                }, 1200);
              }
            }

            if (device_height_longer) {
              if (next_paragraph.is(':hidden') || !media_container.hasClass('watched')) {
                return;
              }
            }
          })
        }
        videoEnded();
      }
      displayMediaPlayer();
    } 
    build(); 
  } 
  
  function imageSlide(image_class, image_link, container, removalTimer) {
    var image_slide = document.createElement('img');
        image_slide.className = 'image-slide ab-mid';
     
    if ($('img.' + image_class).length == 0 && $('.scroll-container').is(':visible')) {
      image_slide.className += ' ' + image_class;
      image_slide.src = image_link;
      $(container).append(image_slide);

      setTimeout(function() { 
        $('img.' + image_class).addClass('show');
      }, 500);  
      
      setTimeout(function() { 
        $('img.' + image_class).removeClass('show');
      }, removalTimer);
    }
  }
  
  
  // MALCOLM X POLICE VERDICT
  first_block_interval = setInterval(firstBlock, 250);
  function firstBlock() { 
    $('p.opened').last().each(function() {  
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("Damien Hirst, Steve Jobs & Malcolm X.")) {  
        imageSlide('into-to-wild', "https://static01.nyt.com/images/2018/07/01/arts/01interview/merlin_139917588_dc988cca-e04f-4594-a2f6-e14ea0c47244-superJumbo.jpg", '.scroll-container .first', 5000);
      }
      
      if (current_paragraph.includes("previously show his love for Malcolm X,")) {
        imageSlide('love-for-malcolm', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Video%20Thumbnails/5.%20Malcolm%20X%20On%20Martin%20Luther%20King/Malcolm%20X%20-%20Gordon%20Parks.jpg", '.scroll-container .first', 5000);
      }
       
      if (current_paragraph.includes("\“That’s too much power for one man to have.\”")) {
        window.clearInterval(first_block_interval);   

        setTimeout(function() { 
          video = $('.malcolm-x-police-predict');
          video_title = "'Police Precinct' scene from Malcolm X (1992)";
          video_link = "https://www.youtube.com/watch?v=iwGojrTKWvI";
          videoPlayer(); 
          
          function videoEnded() {
            video.bind('ended', function() { 
              device_width_longer = $('body').width() > $('body').height();
              device_height_longer = $('body').height() > $('body').width();
              
              if (device_width_longer) {
                if ($('.text-editor .second p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .first').after(media_container);
                  }, 1000);

                  setTimeout(function() {
                    automatedText('.scroll-container .second p', 2000, [], 0, '-break-', 1000);
                    second_block_interval = setInterval(secondBlock, 250);
                  }, 2000);
                }  
              }

              if (device_height_longer) {
                if ($('.text-editor .second p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .second p', 2000, [], 0, '-break-', 1000);
                    second_block_interval = setInterval(secondBlock, 250);
                  }, 2000);
                }  
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // KANYE TO CUDI
  function secondBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("I\’m out here fighting for y’all!!\”")) {
        window.clearInterval(second_block_interval);

        setTimeout(function() { 
          video = $('.kanye-to-cudi');
          video_title = "Kanye West respondes to Kid Cudi";
          video_link = "https://www.youtube.com/watch?v=wZfZM7_WcJA";
          videoPlayer(); 
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .third p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .second').after(media_container);
                  }, 1000);

                  setTimeout(function() {
                    automatedText('.text-editor .third p', 2000, [], 0, '-break-', 1000);
                    third_block_interval = setInterval(thirdBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .third p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .third p', 2000, [], 0, '-break-', 1000);
                    third_block_interval = setInterval(thirdBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  } 
  
  
  // RADIO FUCK YOU
  function thirdBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("Imma take his lead! Radio fuck you!!!\”")) {
        window.clearInterval(third_block_interval);

        setTimeout(function() {
          video = $('.radio-fuck-you');
          video_title = "Kanye\'s Sacremento Rant from November 2016";
          video_link = "https://www.youtube.com/watch?v=bkUr99epJh8";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .fourth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .third').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .fourth p', 2000, [], 0, '-break-', 1000);
                    fourth_block_interval = setInterval(fourthBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .fourth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .fourth p', 2000, [], 0, '-break-', 1000);
                    fourth_block_interval = setInterval(fourthBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // MALCOLM X ON GOLDWATER
  function fourthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("getting the support of the negro.\”")) {
        window.clearInterval(fourth_block_interval);
        
        setTimeout(function() {
          video = $('.malcolm-x-on-goldwater');
          video_title = "Malcolm X On Barry Goldwater, 1964";
          video_link = "https://www.youtube.com/watch?v=ve7g_ibjh3c";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .fifth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .fourth').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .fifth p', 2000, [], 0, '-break-', 1000);
                    fifth_block_interval = setInterval(fifthBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .fifth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .fifth p', 2000, [], 0, '-break-', 1000);
                    fifth_block_interval = setInterval(fifthBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
   
  // MALCOLM X ON MLK
  function fifthBlock() {
    $('p.opened').last().each(function() { 
      current_paragraph = $(this).text();
         
      if (current_paragraph.includes("Martin Luther King received from Malcolm X.")) {
        window.clearInterval(fifth_block_interval);
        
        setTimeout(function() {
          video = $('.malcolm-x-on-mlk');
          video_title = "Malcolm X & Louis Lomax On Martin Luther King, 1963";
          video_link = "https://www.youtube.com/watch?v=X6FEyOziF8s";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .sixth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .fifth').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .sixth p', 2000, [], 0, '-break-', 1000);
                    sixth_block_interval = setInterval(sixthBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .sixth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .sixth p', 2000, [], 0, '-break-', 1000);
                    sixth_block_interval = setInterval(sixthBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // WIZ TWEETS & SLAVERY WAS A CHOICE
  function sixthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("TLOP because it was just too personal,")) {
        imageSlide('i-know-you-mad', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/3.%20Text%20Editor/Sliding%20Images/5.%20I%20Know%20You%20Mad%20Everytime%20You%20Look%20At%20Your%20Child.jpg", '.scroll-container .sixth', 7500);
        
        setTimeout(function() {
          imageSlide('you-own-waves', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/3.%20Text%20Editor/Sliding%20Images/13.%20I%20Own%20Your%20Child.jpg", '.scroll-container .sixth', 5000);
        }, 6000);
      }
      
      if (current_paragraph.includes("You was there for 400 years and it’s all of y’all??\”")) {
        window.clearInterval(sixth_block_interval);
        
        setTimeout(function() {
          video = $('.slavery-was-a-choice');
          video_title = "Kanye on the choice of slavery";
          video_link = "https://www.youtube.com/watch?v=s_M4LkYra5k";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .seventh p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .sixth').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .seventh p', 2000, [], 0, '-break-', 1000);
                    seventh_block_interval = setInterval(seventhBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .seventh p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .seventh p', 2000, [], 0, '-break-', 1000);
                    seventh_block_interval = setInterval(seventhBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // CANDACE OWENS ECONOMICS
  function seventhBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("third world country while screaming about pronouns\”")) {
        window.clearInterval(seventh_block_interval);
        
        setTimeout(function() {
          video = $('.candace-owens-economics');
          video_title = "Candace Owens on economics over social issues";
          video_link = "https://www.youtube.com/watch?v=BSAoitd1BTQ";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .eight p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .seventh').after(media_container);
                  }, 1000);  

                  setTimeout(function() {
                    automatedText('.text-editor .eight p', 2000, [], 0, '-break-', 1000);
                    eight_block_interval = setInterval(eightBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.eight p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.scroll-container .eight p', 2000, [], 0, '-break-', 1000);
                    eight_block_interval = setInterval(eightBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // WE MAKE GOOD MUSIC
  function eightBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("about actual great art and quality of work,")) {
        window.clearInterval(eight_block_interval);
          
        setTimeout(function() {
          video = $('.we-make-good-music');
          video_title = "We Make Good Music";
          video_link = "https://www.youtube.com/watch?v=7BxCDysoSxg";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .ninth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .eight').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .ninth p', 2000, [], 0, '-break-', 1000);
                    ninth_block_interval = setInterval(ninthBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .ninth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .ninth p', 2000, [], 0, '-break-', 1000);
                    ninth_block_interval = setInterval(ninthBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // GEORGE BUSH EXPLANATION
  function ninthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("so wrong, my motivation was from a good place.\”")) {
        window.clearInterval(ninth_block_interval);
        
        setTimeout(function() {
          video = $('.george-bush-explanation');
          video_title = "Kanye on the root of his motive";
          video_link = "https://www.youtube.com/watch?v=_cdlFd5-04E";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .tenth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .ninth').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .tenth p', 2000, [], 0, '-break-', 1000);
                    tenth_block_interval = setInterval(tenthBlock, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .tenth p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .tenth p', 2000, [], 0, '-break-', 1000);
                    tenth_block_interval = setInterval(tenthBlock, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
  
  
  // MACINTOSH TEAM
  function tenthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("just show them clearly where they are going.")) {
        window.clearInterval(tenth_block_interval);
       
        setTimeout(function() {
          video = $('.macintosh-team');
          video_title = "On the creation of the MacIntosh, 1985";
          video_link = "https://twitter.com/acolorblue/status/850923969846718464";
          videoPlayer();
          
          function videoEnded() {
            video.bind('ended', function() { 
              checkDeviceLength();
              
              if (device_width_longer) {
                if ($('.text-editor .eleventh p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    $('.text-editor .tenth').after(media_container);
                  }, 1000); 

                  setTimeout(function() {
                    automatedText('.text-editor .eleventh p', 2000, [], 0, '-break-', 1000);
                    ending_interval = setInterval(theEnd, 250);
                  }, 2000);
                }
              }

              if (device_height_longer) {
                if ($('.text-editor .eleventh p:first-child').is(':hidden')) {
                  setTimeout(function() {
                    automatedText('.text-editor .eleventh p', 2000, [], 0, '-break-', 1000);
                    ending_interval = setInterval(theEnd, 250);
                  }, 2000);
                }
              }
            })
          }
          videoEnded();
        }, 750);
      }
    })
  }
   
   
  // automatedText('.text-editor .eleventh p', 2000, [], 0, '-break-', 1000);
  //                   ending_interval = setInterval(theEnd, 250);
   
  // END OF ESSAY
  function theEnd() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("fight against the dehumanization of black men?")) {
        window.clearInterval(ending_interval);
        
        // setTimeout(function() {
        function completed() {
          $('.text-editor').addClass('completed');
        }
        completed();
        
        function mediaControlsAdjustments() {
          $('.media-container').each(function() {
            var media_container = $(this),
                thumbnail = media_container.find('.thumbnail'),
                video_call_to_action_control = media_container.find('.video.call-to-action-controls'),
                blur = media_container.find('.blur');

            backgroundImageBlur(thumbnail, video_call_to_action_control, blur, 'image-tag');
          })
        }
        mediaControlsAdjustments();
        
        function credits() {
          $('.text-editor .credits').click(function() {
            media_container = $('video.all-credits').parents('.media-container');
            post_link = media_container.find('.post-link');
            
            if (media_container.hasClass('unwatched') || !media_container.hasClass('watched')) {
              text_editor.removeClass('completed');
              
              if (mobile) {
                function buildRotateToLandscape() {
                  var rotate_to_landscape = document.createElement('div');
                      rotate_to_landscape.className = 'rotate-to-landscape ab-mid';

                  var close = document.createElement('button');
                      close.className = 'close grey ab-mid icons-b abs';

                  if ($('.rotate-to-landscape').length == 0) {
                    $('body').prepend(rotate_to_landscape);
                    rotate_to_landscape.prepend(close);
                    
                    $('.rotate-to-landscape .close').click(function() {
                      $('.rotate-to-landscape').remove();
                      media_container.removeClass('visible').hide();
                      text_editor.addClass('completed');
                    })
                  }
                }
                
                if ($('body').hasClass('portrait')) {
                  buildRotateToLandscape();
                }

                $(window).on('orientationchange', function() {
                  if ($('body').hasClass('portrait')) {
                    if ($('.all-credits').parents('.media-container').hasClass('visible')) {
                      buildRotateToLandscape();
                      $('.rotate-to-landscape').show();
                    }
                  }

                  if ($('body').hasClass('landscape')) {
                    if ($('.all-credits').parents('.media-container').hasClass('visible')) {
                      $('.rotate-to-landscape').hide();
                    }
                  }
                });
              }

              setTimeout(function() {
                video = $('video.all-credits');
                video_title = "Credits Of A Kanye West Analysis";
                video_link = "https://www.youtube.com/watch?v=y3FpS-63Pbs";
                videoPlayer();
                
                post_link.hide();

                function videoEnded() {
                  video.bind('ended', function() { 
                    checkDeviceLength();

                    if (device_width_longer) {
                      // if (!media_container.hasClass('watched')) {
                        setTimeout(function() {
                          $('.text-editor .eleventh').after(media_container);
                        }, 1000); 
                      // }
                    }
                    
                    setTimeout(function() {
                      text_editor.addClass('completed');
                      // $('.text-editor .credits').hide();
                      $('.text-editor .credits').remove();
                    }, 2500); 
                    
                    post_link.show();
                  })
                }
                videoEnded();
              }, 750);
            } 
          });
        }
        credits();
        // }, 3750);
      }
    })
  } 
}

  
  
  
// MEDIA PLAYER
function videoPlayback() { 
  var text_editor_title = $('.text-editor > .header .title-scroll'),
      text_call_to_action_controls = $('.text.call-to-action-controls'),
      video_call_to_action_controls,
      video_call_to_action_controls_button,
      search_button = $('.search'),
      parent_content_container = $('.parent-container'),
      title,
      title_scroll,
      media_container,
      header,
      main_controls,
      close,
      play_pause,
      rewind,
      forward,
      time_adjustment, 
      blur,
      media,
      video_loader,
      slider,
      thumbnail,
      video,
      current_time,
      controls,
      post_link,
      paused,
      playing,
      unwatched,
      clicked,
      watched,
      in_text_editor; 
  
  function hideControls() {
    if (unwatched) {
      setTimeout(function() {
        header.addClass('hide');
      }, 4000);
    }
  }
  
  function videoLoader() {
    video_loader.removeClass('hide');
    
    var remove_loader_interval = setInterval(removeLoader, 100);
    function removeLoader() {
      if (video.currentTime > 0) {
        window.clearInterval(remove_loader_interval);
        video_loader.remove();
      }
    } 
    
    function incaseVideoDoesntPlay() {
      setTimeout(function() {
        if (video.currentTime == 0 && $('.video-loader').length == 1) {
          video.pause(); 
          media_container.find('.pause').removeClass('pause').addClass('play');

          setTimeout(function() {
            video.play();  
            media_container.addClass('playing');
            media_container.find('.play').removeClass('play').addClass('pause');
          }, 1000);
        }
      }, 3000);
    }
    incaseVideoDoesntPlay();
  }
  
  function removeUnwatched() {
    media_container.removeClass('unwatched');
    header.removeClass('hide');
  }
  
  function videoEnded() {
    $(video).bind('ended', function() { 
      $(window).off('resize');
      $(video).addClass('hide');
      thumbnail.fadeIn(200);
      header.removeClass('hide');
      blur.fadeIn(200);
      media_container.find('.pause').removeClass('pause').addClass('play');
      
      if ($('body').width() > $('body').height()) {
        media_container.removeClass('playing');
        main_controls.remove();
        setTimeout(function() {
          text_editor.removeClass('video-player');
          media_container.addClass('video-player watched');
          scroll_container.show();
        }, 900);
      }

      if ($('body').height() > $('body').width()) {
        setTimeout(function() {
          media_container.removeClass('playing');
          media_container.addClass('watched');
        }, 900);
      }
      
      media_container.removeClass('visible');
    })
  }

   
  if (computer) {
    $(document)
      .on('click', '.video.call-to-action-controls button', function(event) {
      in_text_editor = !$('.text-editor').hasClass('video-player');
      media_container = $(this).parents('.media-container');
      unwatched = media_container.hasClass('unwatched');
      clicked = !media_container.hasClass('unwatched');
      watched = media_container.hasClass('watched');
      header = media_container.find('.header');
      main_controls = media_container.find('.main-controls');
      close = media_container.find('.close');
      video_call_to_action_controls = media_container.find('.video.call-to-action-controls');
      video_call_to_action_controls_button =  media_container.find('.video.call-to-action-controls button');
      play_pause = $(this).hasClass('play-pause');
      rewind = $(this).hasClass('rewind');
      forward = $(this).hasClass('forward');
      time_adjustment = rewind || forward;
      blur =  media_container.find('.blur');
      media = media_container.find('.media');
      video_loader = media_container.find('.video-loader');
      thumbnail = media_container.find('.thumbnail');
      video = media_container.find('video')[0];
      post_link = media_container.find('.controls .post-link');
      paused =  video.paused;
      playing = !video.paused;
 
      hideControls();

      if (play_pause) {
        if (paused) {
          if (unwatched) {
            videoLoader();
            removeUnwatched();
          }
          
          if ($(video).hasClass('hide')) {
            $(video).removeClass('hide');
          }
          
          thumbnail.fadeOut(200);
          blur.fadeOut(200);
          video.play();  
          media_container.addClass('playing');
          media_container.find('.play').removeClass('play').addClass('pause');
        }

        else if (playing) {
          video.pause(); 
          media_container.removeClass('playing');
          header.removeClass('hide');
          media_container.find('.pause').removeClass('pause').addClass('play');
          
          if (watched) {
            thumbnail.fadeIn(200);
          }
        }
      }
      
      else if (time_adjustment) {
        current_time = video.currentTime;

        if (rewind) {
          video.currentTime = current_time - 4;
        }

        if (forward) {
          video.currentTime = current_time + 4;
        }
      }
      
      videoEnded();
      event.stopPropagation();
      }) 
    
      .on('click', '.video.call-to-action-controls', function(event) {
        event.stopPropagation();
      })
      
      .on('click', '.media-container', function() {
        media_container = $(this);
        play_pause = media_container.find('.play-pause');
        play_pause.click();  
      })
    
      .on('mousemove', '.media-container', function() {
        media_container = $(this);
        unwatched = media_container.hasClass('unwatched');
        clicked = !media_container.hasClass('unwatched');
        watched = media_container.hasClass('watched');
        header = media_container.find('.header');
        video = media_container.find('video')[0];
        
        if (clicked) { 
          $(document)    
            .on('mousemove', '.media-container', function() {
              header.removeClass('hide');
            })

            .on('mouseleave', '.media-container', function() {
              header.addClass('hide');
            })
        }
        })
    
      .on('click', '.media-container .close', function(event) {
        media_container = $(this);
        play_pause = media_container.find('.play-pause');
        event.stopPropagation();
      })
  }
  
  if (mobile) {
    $(document)
      .on('touchstart', '.video.call-to-action-controls button', function(event) {
      in_text_editor = !$('.text-editor').hasClass('video-player');
      media_container = $(this).parents('.media-container');
      unwatched = media_container.hasClass('unwatched');
      clicked = !media_container.hasClass('unwatched');
      watched = media_container.hasClass('watched');
      header = media_container.find('.header');
      main_controls = media_container.find('.main-controls');
      close = media_container.find('.close'); 
      video_call_to_action_controls = media_container.find('.video.call-to-action-controls');
      video_call_to_action_controls_button =  media_container.find('.video.call-to-action-controls button');
      play_pause = $(this).hasClass('play-pause');
      rewind = $(this).hasClass('rewind');
      forward = $(this).hasClass('forward');
      time_adjustment = rewind || forward;
      blur =  media_container.find('.blur');
      media = media_container.find('.media');
      video_loader = media_container.find('.video-loader');
      thumbnail = media_container.find('.thumbnail');
      video = media_container.find('video')[0];
      post_link = media_container.find('.controls .post-link');
      paused =  video.paused;
      playing = !video.paused;

      enableInlineVideo(video);
      hideControls();

      if (play_pause) {
        if (paused) {
          if (unwatched) {
            videoLoader();
            removeUnwatched();
          }
          
          if ($(video).hasClass('hide')) {
            $(video).removeClass('hide');
          }
          
          thumbnail.hide();
          video.play();  
          media_container.addClass('playing');
          blur.fadeOut(200);
          media_container.find('.play').removeClass('play').addClass('pause');
        }

        else if (playing) {
          video.pause(); 
          media_container.removeClass('playing');
          media_container.find('.pause').removeClass('pause').addClass('play');
          header.removeClass('hide');
        }
      }

      else if (time_adjustment) {
        current_time = video.currentTime;

        if (rewind) {
          video.currentTime = current_time - 4;
        }

        if (forward) {
          video.currentTime = current_time + 4;
        }
      }
  
      videoEnded();
      event.stopPropagation();
      })
    
      .on('touchstart', '.video.call-to-action-controls', function(event) {
        event.stopPropagation();
      })
    
      .on('touchstart', '.media-container', function(event) {
        media_container = $(this);
        unwatched = media_container.hasClass('unwatched');
        clicked = !media_container.hasClass('unwatched');
        watched = media_container.hasClass('watched');
        header = media_container.find('.header');
        
        if (clicked) {
          header.toggleClass('hide');
        }
        event.stopPropagation();
      })
    
      .on('touchstart', '.media-container .close', function(event) {
        media_container = $(this);
        play_pause = media_container.find('.play-pause');
        event.stopPropagation();
      })
  }
}




// AUTOMATED SCROLL READJUSTMENT
function automatedScrollAdjustment() {
  var parent_container_height = $('.parent-container').height();

  if (uncompleted) {
    var margin_top = 0;
    var current_scroll_container_height = $('.scroll-container').height();

    if (current_scroll_container_height <= parent_container_height) {
      $('.scroll-container').css('margin-top', margin_top);
    } 
    
    if (current_scroll_container_height >= parent_container_height) { 
      if (current_scroll_container_height >= parent_container_height * 1) {
        margin_top = -parent_container_height / 2;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 1.5) {
        margin_top = -parent_container_height;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 2) {
        margin_top = -parent_container_height * 1.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 2.5) {
        margin_top = -parent_container_height * 2;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 3) {
        margin_top = -parent_container_height * 2.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 3.5) {
        margin_top = -parent_container_height * 3;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 4) {
        margin_top = -parent_container_height * 3.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 4.5) {
        margin_top = -parent_container_height * 4;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 5) {
        margin_top = -parent_container_height * 4.5;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 5.5) {
        margin_top = -parent_container_height * 5;
        $('.scroll-container').css('margin-top', margin_top);
      }
  
      if (current_scroll_container_height >= parent_container_height * 6) {
        margin_top = -parent_container_height * 5.5;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 6.5) {
        margin_top = -parent_container_height * 6;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 7) {
        margin_top = -parent_container_height * 6.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 7.5) {
        margin_top = -parent_container_height * 7;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 8) {
        margin_top = -parent_container_height * 7.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 8.5) {
        margin_top = -parent_container_height * 8;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 9) {
        margin_top = -parent_container_height * 8.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 9.5) {
        margin_top = -parent_container_height * 9;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 10) {
        margin_top = -parent_container_height * 9.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 10.5) {
        margin_top = -parent_container_height * 10;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 11) {
        margin_top = -parent_container_height * 10.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 11.5) {
        margin_top = -parent_container_height * 11;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 12) {
        margin_top = -parent_container_height * 11.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 12.5) {
        margin_top = -parent_container_height * 12;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 13) {
        margin_top = -parent_container_height * 12.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 13.5) {
        margin_top = -parent_container_height * 13;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 14) {
        margin_top = -parent_container_height * 13.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 14.5) {
        margin_top = -parent_container_height * 14;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 15) {
        margin_top = -parent_container_height * 14.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 15.5) {
        margin_top = -parent_container_height * 15;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 16) {
        margin_top = -parent_container_height * 15.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 16.5) {
        margin_top = -parent_container_height * 16;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 17) {
        margin_top = -parent_container_height * 16.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 17.5) {
        margin_top = -parent_container_height * 17;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 18) {
        margin_top = -parent_container_height * 17.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 18.5) {
        margin_top = -parent_container_height * 18;
        $('.scroll-container').css('margin-top', margin_top);
      }
  
      if (current_scroll_container_height >= parent_container_height * 19) {
        margin_top = -parent_container_height * 18.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 19.5) {
        margin_top = -parent_container_height * 19;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 20) {
        margin_top = -parent_container_height * 19.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 20.5) {
        margin_top = -parent_container_height * 20;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 21) {
        margin_top = -parent_container_height * 20.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 21.5) {
        margin_top = -parent_container_height * 21;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 22) {
        margin_top = -parent_container_height * 21.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 22.5) {
        margin_top = -parent_container_height * 22;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 23) {
        margin_top = -parent_container_height * 22.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 23.5) {
        margin_top = -parent_container_height * 23;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 24) {
        margin_top = -parent_container_height * 23.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 24.5) {
        margin_top = -parent_container_height * 24;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 25) {
        margin_top = -parent_container_height * 24.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
    }
  }
}


 

// FILE CLICK 
function onFileClick() {
  $('.file')  
    .on('click', function() {
    if ($(this).hasClass('selected')) {
      return;
    }

    if (!$(this).hasClass('selected')) {
      if ($(this).hasClass('text')) {
        $(this).addClass('selected');
        $('.text-editor').removeClass('hide');
        
        if ($('.text-editor').hasClass('video-player')) {
          $('.mac-os').addClass('dim');
        }
        
        $('.screensaver-credits').removeClass('show');
      }
    }
  })

    .on('contextmenu', function() {
    return false;
  })
  
    $('.file').draggable({
      cancel: false,
      cursor: 'move'
    });
}

  


// WINDOW ON LOAD
window.onload = function() {
  specifications();
  userDeviceSpecifications();
  // loader(); 
  firstImpressionContainer();
  detectSizeChange(); 
  userActiveStatus();
  menuBar();
  
  // REMOVE IF LOADER PRESENT
  callRemainderFunctions();
}




// CALL REMAINDER FUNCTIONS
function callRemainderFunctions() {
  clock(); 
  backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');  
  closeTextEditor();
  searchTextEditor();    
  sharePage();
  mediaPreloads();
    
  function callAutomatedText() {
    var call_essay_interval = setInterval(callEssay, 200);
    function callEssay() {
      if ($('.loader').length == 0) {
        window.clearInterval(call_essay_interval);
        setTimeout(function() { 
          automatedText('.scroll-container .first p', 2000, [''], 0, '-break-', 800);
        }, 1800);
      }
    }
  }
  callAutomatedText();
  
  mediaAfterParagraphs();
  videoPlayback();
  onFileClick();
  onWindowClick();
}




// DESKTOP CLICK
function onWindowClick() {
  $('.mac-os').click(function() {    
    var selected_exists = $('.menu-bar .section-container.selected').length == 1;

    if (selected_exists) {
      $('.menu-bar .section-container').removeClass('selected');
    }
  })
}




// WINDOW ON ERROR
window.onerror = function(msg, url, linenumber) {
  function errorMessageApp() {
    // alert("An error has occured, please throw your device away immediately. lol nah i'm fucking with you but tell me what happened though.");
    
    if ($('.text-editor.error').length == 1) {
      return;
    }
     
    $('.text-editor').removeClass('video-player instagram-share');
    $('.call-to-action-controls, .text-editor .scroll-container p, .text-editor .media-container').remove();
    $('.text-editor').addClass('error');
    $('.text-editor > .header .title').addClass('ab-mid');
    $('.text-editor > .header .title-scroll').text("An Error Has Occured.");
    
    var call_to_action_controls = document.createElement('div');
        call_to_action_controls.className = 'call-to-action-controls error';

    var call_to_action = document.createElement('button');
    
    var section_title = document.createElement('p');
        section_title.className = 'section-title';
    
    var code_error = document.createElement('p');
        code_error.className = 'code-error';
        code_error.innerHTML = "<span>" + msg + ".</span> " +
          "<span>Line Number: " + linenumber + ".</span> ";
    
    var user_experience = document.createElement('p');
        user_experience.className = 'user-experience empty';
        user_experience.contentEditable = true;
     
    $('.text-editor > .header .top-bar').append(call_to_action_controls);
    call_to_action.className += ' confirm-action';
    call_to_action.innerHTML = "Send Email";
    call_to_action_controls.prepend(call_to_action.cloneNode(true));
    $('.error .confirm-action').click(function() {
      var email_address = 'mailto:info@acolorblue.co'; 
      var subject = "?subject=Error on " + url;
      var body = "&body=" + 
          "CODE ERROR: " + "%0A" + 
          $('.code-error').text().replace(". ", ". %0A") + "%0A %0A" + 
          "USER EXPERIENCE: " + "%0A" + 
          $('.user-experience').text();
      
      window.location.href = email_address + subject + body;
      
      setTimeout(function() {
        location.reload();
      }, 2000);
    }); 
      
    section_title.innerHTML = "Code Error";
    $('.text-editor .scroll-container').append(section_title.cloneNode(true));
    $('.text-editor .scroll-container').append(code_error);
    
    section_title.className += ' experience';
    section_title.innerHTML = "User Experience";
    $('.text-editor .scroll-container').append(section_title.cloneNode(true));
    $('.text-editor .scroll-container').append(user_experience);
    
    $('.user-experience').keyup(function() {
      if ($(this).length > 0) {
        $(this).removeClass('empty');
      }
       
      if ($(this).text() == "") {
        $(this).addClass('empty');
      }
    })
  }
  errorMessageApp();
  
  return true;
}
