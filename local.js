// GLOBAL VARIABLES
var article_title = "A Kanye West Analysis",
    uncompleted = $('p.unread').length > 0, 
    completed = $('p.unread').length == 0;




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

        $('.leave-twitter').fadeIn(200);
        var leave_twitter_text = $('.leave-twitter').html();
        $('.leave-twitter').html(leave_twitter_text.replace("native browser", native_browser));
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
      if (computer) {
        $('.gta .character').removeClass('move');
        
        setTimeout(function() {
          $('.gta .character').addClass('move'); 
        }, 100);
      }

      if (mobile) {
        $('.gta .background, .gta .character').removeClass('move');
        
        setTimeout(function() {
          $('.gta .background, .gta .character').addClass('move');
        }, 100);
      }
    }
    
    function transitions() { 
      // MICHAEL 
      $('.gta .michael.background-and-character-container').addClass('show');
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          if (!twitterInAppBrowser) {
            $('.loader .gta .skip-loader').fadeIn(200);
          }
          $('.gta .michael.background-and-character-container').removeClass('show');
        }
      }, 4150); 
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .michael.background-and-character-container').remove();
          addMoveLoop(); 
        }
      }, 5650);
      
      // TREVOR
      setTimeout(function() { 
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .trevor.background-and-character-container').addClass('show');
        }
      }, 6050);
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .trevor.background-and-character-container').removeClass('show');
        }
      }, 9200);
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
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
      
      // FRANKLIN
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .franklin.background-and-character-container').addClass('show');
        }
      }, 11100);
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          $('.gta .franklin.background-and-character-container').removeClass('show');
        }
      }, 14250);
      setTimeout(function() {
        if (!$('.loader').hasClass('skipped')) {
          callRemainderFunctions();
          $('.gta').removeClass('original');
          $('.gta .franklin.background-and-character-container').remove();
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
          $('.gta .michael.background-and-character-container, .gta .trevor.background-and-character-container, .gta .franklin.background-and-character-container').remove();
          $('.gta .background, .gta .character').removeClass('move');
          // setTimeout(function() { 
            callRemainderFunctions();
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




// DEVICE SPECIFICATIONS
function userDeviceSpecifications() {
  if (computer) {
    $('body').addClass('computer');
    manuallyCenter('.desktop', '.text-editor');

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
   
  if (mobile) {
    $('body').addClass('mobile');
    
    function portraitOrLandscape() {
      if (window.orientation == 0) {
        $('body').removeClass('landscape').addClass('portrait');
        $('.text-editor > .blur').removeClass('cover').addClass('contain');
      }

      else if (window.orientation == -90 || 90) {
        $('body').removeClass('portrait').addClass('landscape');
        $('.text-editor > .blur').removeClass('contain').addClass('cover');
      }
    }
    portraitOrLandscape();
    
    window.addEventListener('orientationchange', function() {
      portraitOrLandscape();
    });
  }
}


 

// DETECT SIZE CHANGE
function detectSizeChange() {   
  $('.mac-os, .text-editor').mutate('width height top left', function(el, info) {
    if (computer) {
      function menuBarZIndex() {
        if (!$('.text-editor').hasClass('video-player')) {
          $('.menu-bar').css('z-index', '3');
        }
         
        else if ($('.text-editor').hasClass('video-player')) {
          $('.menu-bar').css('z-index', '0');
        }
      }
      menuBarZIndex();
      
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
            
      function windowSizing() {
        if ($('.mac-os').width() < 1000) {
          $('.text-editor > .blur').removeClass('cover').addClass('contain');
        }

        if ($('.mac-os').width() >= 1000) {
          $('.text-editor > .blur').removeClass('contain').addClass('cover');
        }
      }
      windowSizing();
    }

    backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');
    automatedScrollAdjustment();
  });
} 

 


// USER ACTIVE STATUS
function userActiveStatus() {    
  $(window).focus(); 
  
  $(window).on('blur', function() {
    if (mobile) {
      alert("The webpage was paused because you were offline.");
    }
  });
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




// SEARCH TEXT
function searchTextEditor() {
  $('.text-editor .search').click(function() {
    var search_bar = document.createElement('input');
        search_bar.className = 'search-bar hide';
        search_bar.placeholder = "Spotlight Search";

    var original_content = $('.text-editor .parent-container').html();
    var original_children = $('.text-editor .parent-container').children();
    

    if ($('.search-bar').length == 1) {
      $('.search-bar').addClass('hide');
      setTimeout(function() {
        $('.search-bar').remove();
        $('.text-editor > .header .title').show();
        return; 
      }, 100); 
    }

    if ($('.search-bar').length == 0) {
      if (uncompleted) {
        $('.text-editor > .header .title-scroll').text("Damn Finish Reading First");
        
        setTimeout(function() {
          if ($('.text-editor > .header .title-scroll').text() != "Damn Finish Reading First") {
            return;   
          } 
          
          else if (!$('.text-editor').hasClass('video-player')) {
            $('.text-editor > .header .title-scroll').text(article_title);
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
      var poster_link = 'https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Poster%20-%204.jpg', 
          webpage = 'https://acolorblue.co/a-kanye-west-analysis',
          line_break = '%0A',
          caption = "A Kanye West Analysis, by @acolorblue.",
          window_link;

      var poster = document.createElement('img');
          poster.className = 'poster';
          poster.src = poster_link;

      var call_to_action = document.createElement('button');

      if ($(this).hasClass('twitter-b')) {
        window_link = 'https://twitter.com/intent/tweet?source=webclient&text=' + caption + line_break + webpage;

        window.open(window_link);
      }


      if ($(this).hasClass('instagram-b')) {
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

        function closeShare() {
          poster.remove();
          $('.share.call-to-action-controls').hide();
          $('.text-editor > .header .title-scroll').text(article_title);
          $('.text-editor').removeClass('instagram-share');
          $('.text.call-to-action-controls, .text.call-to-action-controls .search').show();
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
          call_to_action.className += ' confirm-action';
          call_to_action.innerHTML = "Confirm";
          call_to_action_controls.prepend(call_to_action.cloneNode(true));
          $('.share .confirm-action').click(function() {
            window.location.href = window_link;
            closeShare();
          });

          call_to_action.className += ' cancel-action';
          call_to_action.innerHTML = "Cancel";
          call_to_action_controls.append(call_to_action.cloneNode(true));
          $('.share .cancel-action').click(function() {
            closeShare();
          });
        }
        imagePreviewApp();
      }


      if ($(this).hasClass('tumblr-b')) {
        window_link = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + poster_link + '&caption=' + '<a href=\''+  webpage + '\'>' + '<i>' + caption.slice(0, 21) + '</i></a>' + caption.slice(21);

        window.open(window_link);
      }

      $('.social-share-container').remove();
    })
  })
}




// PRELOAD CHANGE
function videoPreloadChange() {
  $('video').each(function() {
    $(this).attr('preload', 'auto');
  })
}




// AUTOMATED TEXT
function automatedText(selector, timeBetweenText, exclude, timeBeforeStart, breakWord, breakTime) {
  var original_characters_length = $('.scroll-container p').text().replace(/-break-/g, "").length;
  var booSkipAutomatedText = false;

  if (selector == null || selector.trim() == '')
    return;

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
 
  setTimeout(function () {
    automaticText(textInfo);
  }, textInfo.timeBeforeStart);

  function automaticText(objTextInfo) {
    let $lines = document.querySelectorAll(objTextInfo.selector),
        lineContents = new Array(), 
        lineCount = $lines.length; 
 
    var skip = 0; 
   
    for (var i = 0; i < lineCount; i++) {  
      lineContents[i] = $lines[i].textContent; 
      $lines[i].textContent = '';
      $lines[i].style.visibility = 'visible';
      $lines[i].style.display = 'block';
    }
    typeLine();

    function typeLine(idx) {
      idx == null && (idx = 0);
      var element = $lines[idx];
      var content = lineContents[idx];

      if (typeof content == "undefined") {
        let elClassSkip = document.getElementsByClassName('skip');
        let lengthClassSkip = elClassSkip.length;

        while (lengthClassSkip--) {
          elClassSkip[lengthClassSkip].style.display = 'none';
        }
        return;
      }

      var booExclude = false;

      if (objTextInfo.exclude != null) {
        element.classList.forEach(function (elementClass) {
          if (!booExclude) { booExclude = objTextInfo.exclude.includes(elementClass); }
        });

        booExclude = (booExclude || !booExclude && objTextInfo.exclude.includes(element.tagName.toLowerCase()));
      }

      var charIdx = 0;

      if (booExclude || booSkipAutomatedText) {
        element.textContent = content;
        typeLine(++idx);
      } 
      else {
        content = '' + content + '';
        element.appendChild(document.createTextNode(' '));
        element.className += ' active';
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
              element.classList.remove('active');
              element.classList.remove('unread');
              setTimeout(function () {
                typeLine(++idx);
              }, (!booSkipAutomatedText ? objTextInfo.timeBetweenText : 0));
            }
          }, (booBreak && !booSkipAutomatedText ? objTextInfo.breakTime : 0))
        }, rand);
      }
      
      $('.scroll-container').mutate('height', function(el, info) {
        automatedScrollAdjustment();
      });
    }
  }
  
  $('button.search').click(function() {
    booSkipAutomatedText = true;
  })
}




// MEDIA AFTER PARAGRAPHS
function mediaAfterParagraphs() {
  var mac_os = $('.mac-os'),
      text_editor = $('.text-editor'),
      current_paragraph,
      parent_container = $('.parent-container'),
      media_container,
      media_container_height,
      media,
      blur,
      thumbnail,
      header_height,
      main_controls,
      main_controls_buttons,
      video_call_to_action_controls,
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
      
  
  function buildMediaPlayer() {    
    var call_to_action = document.createElement('button');
        call_to_action.className = 'white icons-b abs';
    
    function preparations() {
      function hideInstagramShare() {
        if ($('.text-editor').hasClass('instagram-share')) {
          $('img.poster').remove();
          $('.share.call-to-action-controls').hide();
          $('.text-editor').removeClass('instagram-share');
        } 
      }
      hideInstagramShare();
      
      function pauseAllVideos() {
        $('video').each(function() {
          var video = $(this).get(0),
              thumbnail = $(this).prev('.thumbnail');

          if (!video.paused) {
            video.pause(); 
            thumbnail.fadeIn(200);
          }
        });
      }
      pauseAllVideos();
    }
    preparations(); 
    
    function build() {
      media_container = video.parents('.media-container');
      media = media_container.find('.media');
      thumbnail = media_container.find('.thumbnail');
      main_controls = media_container.find('.main-controls');
      main_controls_buttons = main_controls.children('button');
      video_call_to_action_controls = media_container.find('.video.call-to-action-controls');
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
            video_loader.src = "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Loader/Internet%20Explorer%20Loader2.gif";
        
        if ($('.video-loader').length == 0) {
          media.prepend(video_loader);
        }
      }
      
      function postLink() {
        call_to_action.className += ' post-link';
        if (video_link.match(/youtube/i)) {
          call_to_action.className += ' youtube-b white';
        }  
        if (video_link.match(/twitter/i)) {
          call_to_action.className += ' twitter-b';
        }

        video_call_to_action_controls.append(call_to_action);
        $('.video-player .post-link').click(function() {
          window.open(video_link);
        });
      }
      
      function resizeBlur() {
        blur.css('width', thumbnail.width());
        blur.css('height', thumbnail.height());
        blur.css('left', '-' + video_call_to_action_controls.css('margin-left'));
      }
      
      
      if (computer) {
        media_container.slideDown(500);
        parent_container.append(media_container);
        
        setTimeout(function() {
          text_editor.addClass('video-player');

          setTimeout(function() {
            backgroundImageBlur(thumbnail, video_call_to_action_controls, blur, 'image-tag');
            controlsBackgroundColor();
            
            setTimeout(function() {
              videoLoader();
              mac_os.addClass('dim');
            }, 200);
          }, 300);
        }, 700); 
        
        function videoEnded() {
          video.bind('ended', function() { 
            if (next_paragraph.is(':hidden')) {
              setTimeout(function() {
                text_editor.removeClass('video-player');
                media_container.addClass('video-player');
                postLink();
                
                setTimeout(function() {
                  resizeBlur();
                  mac_os.removeClass('dim');
                }, 200);
              }, 1000);
            }
          })
        }
        videoEnded();
      }
      
      if (mobile) { 
        main_controls.remove();
        media_container.fadeIn(200).addClass('video-player');
        
        backgroundImageBlur(thumbnail, video_call_to_action_controls, blur, 'image-tag');
        controlsBackgroundColor();
        videoLoader();
        
        function videoEnded() {
          video.bind('ended', function() { 
            if (next_paragraph.is(':hidden')) {
              postLink();
              return;
            }
          })
        }
        videoEnded();
      } 
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
  first_block_interval = setInterval(firstBlock, 10);
  function firstBlock() { 
    $('p.active').each(function() {  
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
          
          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() { 
              if ($('.second p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.first').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .second p', 2000, [], 0, '-break-', 1000);
                    second_block_interval = setInterval(secondBlock, 10);
                  }, 1000);
                }, 1000);
              }  
            })
          } 
    
          if (mobile) {
            buildMediaPlayer(); 

            video.bind('ended', function() { 
              if ($('.second p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .second p', 2000, [], 0, '-break-', 1000);
                  second_block_interval = setInterval(secondBlock, 10);
                }, 2000);
              }  
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // KANYE TO CUDI
  function secondBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("I\’m out here fighting for y’all!!\”")) {
        window.clearInterval(second_block_interval);

        setTimeout(function() { 
          video = $('.kanye-to-cudi');
          video_title = "Kanye West respondes to Kid Cudi";
          video_link = "https://www.youtube.com/watch?v=wZfZM7_WcJA";
          
          if (computer) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.third p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.second').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .third p', 2000, [], 0, '-break-', 1000);
                    third_block_interval = setInterval(thirdBlock, 10);
                  }, 1000);
                }, 1000);
              }
            })
          } 
 
          if (mobile) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.third p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .third p', 2000, [], 0, '-break-', 1000);
                  third_block_interval = setInterval(thirdBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // RADIO FUCK YOU
  function thirdBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("Imma take his lead! Radio fuck you!!!\”")) {
        window.clearInterval(third_block_interval);

        setTimeout(function() {
          video = $('.radio-fuck-you');
          video_title = "Kanye\'s Sacremento Rant from November 2016";
          video_link = "https://www.youtube.com/watch?v=bkUr99epJh8";
          
          if (computer) {
            buildMediaPlayer(); 

            video.bind('ended', function() {
              if ($('.fourth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.third').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .fourth p', 2000, [], 0, '-break-', 1000);
                    fourth_block_interval = setInterval(fourthBlock, 10);
                  }, 2000);
                }, 1000); 
              }
            })
          } 

          if (mobile) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.fourth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .fourth p', 2000, [], 0, '-break-', 1000);
                  fourth_block_interval = setInterval(fourthBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // MALCOLM X ON GOLDWATER
  function fourthBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("getting the support of the negro.\”")) {
        window.clearInterval(fourth_block_interval);
        
        setTimeout(function() {
          video = $('.malcolm-x-on-goldwater');
          video_title = "Malcolm X On Barry Goldwater, 1964";
          video_link = "https://www.youtube.com/watch?v=ve7g_ibjh3c";
          
          if (computer) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.fifth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.fourth').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .fifth p', 2000, [], 0, '-break-', 1000);
                    fifth_block_interval = setInterval(fifthBlock, 10);
                  }, 1000);
                }, 1000); 
              }
            })
          } 

          if (mobile) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.fifth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .fifth p', 2000, [], 0, '-break-', 1000);
                  fifth_block_interval = setInterval(fifthBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
   
  // MALCOLM X ON MLK
  function fifthBlock() {
    $('p.active').each(function() { 
      current_paragraph = $(this).text();
         
      if (current_paragraph.includes("Martin Luther King received from Malcolm X.")) {
        window.clearInterval(fifth_block_interval);
        
        setTimeout(function() {
          video = $('.malcolm-x-on-mlk');
          video_title = "Malcolm X & Louis Lomax On Martin Luther King, 1963";
          video_link = "https://www.youtube.com/watch?v=X6FEyOziF8s";
          
          if (computer) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.sixth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.fifth').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .sixth p', 2000, [], 0, '-break-', 1000);
                    sixth_block_interval = setInterval(sixthBlock, 10);
                  }, 1000);
                }, 1000); 
              }
            })
          } 

          if (mobile) {
            buildMediaPlayer(); 
            
            video.bind('ended', function() {
              if ($('.sixth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .sixth p', 2000, [], 0, '-break-', 1000);
                  sixth_block_interval = setInterval(sixthBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // WIZ TWEETS & SLAVERY WAS A CHOICE
  function sixthBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("TLOP because it was just too personal,")) {
        imageSlide('i-know-you-mad', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Tweets/5.%20I%20Know%20You%20Mad%20Everytime%20You%20Look%20At%20Your%20Child.jpg", '.scroll-container .sixth', 7500);
        
        setTimeout(function() {
          imageSlide('you-own-waves', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Tweets/13.%20I%20Own%20Your%20Child.jpg", '.scroll-container .sixth', 5000);
        }, 6000);
      }
      
      if (current_paragraph.includes("You was there for 400 years and it’s all of y’all??\”")) {
        window.clearInterval(sixth_block_interval);
        
        setTimeout(function() {
          video = $('.slavery-was-a-choice');
          video_title = "Kanye on the choice of slavery";
          video_link = "https://www.youtube.com/watch?v=s_M4LkYra5k";
          
          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.seventh p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.sixth').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .seventh p', 2000, [], 0, '-break-', 1000);
                    seventh_block_interval = setInterval(seventhBlock, 10);
                  }, 1000);
                }, 1000); 
              }
            })
          } 

          if (mobile) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.seventh p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .seventh p', 2000, [], 0, '-break-', 1000);
                  seventh_block_interval = setInterval(seventhBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // CANDACE OWENS ECONOMICS
  function seventhBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("third world country while screaming about pronouns\”")) {
        window.clearInterval(seventh_block_interval);
        
        setTimeout(function() {
          video = $('.candace-owens-economics');
          video_title = "Candace Owens on economics over social issues";
          video_link = "https://www.youtube.com/watch?v=BSAoitd1BTQ";
          
          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.eight p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.seventh').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .eight p', 2000, [], 0, '-break-', 1000);
                    eight_block_interval = setInterval(eightBlock, 10);
                  }, 1000);
                }, 1000);  
              }
            }) 
          } 

          if (mobile) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.eight p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .eight p', 2000, [], 0, '-break-', 1000);
                  eight_block_interval = setInterval(eightBlock, 10);
                }, 2000);
              }
            }) 
          }
        }, 1000);
      }
    })
  }
  
  
  // WE MAKE GOOD MUSIC
  function eightBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("about actual great art and quality of work,")) {
        window.clearInterval(eight_block_interval);
          
        setTimeout(function() {
          video = $('.we-make-good-music');
          video_title = "We Make Good Music";
          video_link = "https://www.youtube.com/watch?v=7BxCDysoSxg";

          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.ninth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.eight').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .ninth p', 2000, [], 0, '-break-', 1000);
                    ninth_block_interval = setInterval(ninthBlock, 10);
                  }, 1000);
                }, 1000); 
              }
            })
          } 

          if (mobile) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.ninth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .ninth p', 2000, [], 0, '-break-', 1000);
                  ninth_block_interval = setInterval(ninthBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // GEORGE BUSH EXPLANATION
  function ninthBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("so wrong, my motivation was from a good place.\”")) {
        window.clearInterval(ninth_block_interval);
        
        setTimeout(function() {
          video = $('.george-bush-explanation');
          video_title = "Kanye on the root of his motive";
          video_link = "https://www.youtube.com/watch?v=_cdlFd5-04E";
          
          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.tenth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.ninth').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .tenth p', 2000, [], 0, '-break-', 1000);
                    tenth_block_interval = setInterval(tenthBlock, 10);
                  }, 2000);
                }, 1000); 
              }
            })
          } 
          
          if (mobile) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.tenth p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .tenth p', 2000, [], 0, '-break-', 1000);
                  tenth_block_interval = setInterval(tenthBlock, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  
  
  // MACINTOSH TEAM
  function tenthBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("just show them clearly where they are going.")) {
        window.clearInterval(tenth_block_interval);
       
        setTimeout(function() {
          video = $('.macintosh-team');
          video_title = "On the creation of the MacIntosh, 1985";
          video_link = "https://twitter.com/acolorblue/status/850923969846718464";
          
          if (computer) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.eleventh p:first-child').is(':hidden')) {
                setTimeout(function() {
                  $('.tenth').after(media_container);

                  setTimeout(function() {
                    automatedText('.scroll-container .eleventh p', 2000, [], 0, '-break-', 1000);
                    ending_interval = setInterval(theEnd, 10);
                  }, 1000);
                }, 1000); 
              }
            })
          } 
          
          if (mobile) {
            buildMediaPlayer();
            
            video.bind('ended', function() {
              if ($('.eleventh p:first-child').is(':hidden')) {
                setTimeout(function() {
                  automatedText('.scroll-container .eleventh p', 2000, [], 0, '-break-', 1000);
                  ending_interval = setInterval(theEnd, 10);
                }, 2000);
              }
            })
          }
        }, 1000);
      }
    })
  }
  

  // END OF ESSAY
  function theEnd() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("fight against the dehumanization of black men?")) {
        window.clearInterval(ending_interval);
        
        setTimeout(function() {
          function disableAutomatedScroll() {
            $('.scroll-container').addClass('completed');
          }
          disableAutomatedScroll();
          
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
        }, 4000);
      }
    })
  } 
}


  

// MEDIA PLAYER
function videoPlayback() { 
  var text_editor = $('.text-editor'),
      text_editor_title = $('.text-editor > .header .title-scroll'),
      text_call_to_action_controls = $('.text.call-to-action-controls'),
      video_call_to_action_controls,
      video_call_to_action_controls_button,
      search_button = $('.search'),
      parent_content_container = $('.parent-container'),
      title,
      title_scroll,
      scroll_container = $('.scroll-container'),
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
  }
  
  function removeUnwatched() {
    media_container.removeClass('unwatched');
    header.removeClass('hide');
  }
  
  
  if (computer) {
    $(document)
      .on('click', '.video.call-to-action-controls button', function(event) {
      in_text_editor = !$('.text-editor').hasClass('video-player');
      media_container = $(this).parents('.media-container');
      unwatched = media_container.hasClass('unwatched');
      watched = !media_container.hasClass('unwatched');
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
          
          if (in_text_editor) {
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

      $(video).bind('ended', function() {
        media_container.removeClass('playing');
        $(video).addClass('hide');
        thumbnail.fadeIn(200);
        main_controls.remove();
        header.removeClass('hide');
        blur.fadeIn(200);
        media_container.find('.pause').removeClass('pause').addClass('play');
        setTimeout(function() {
          text_editor.removeClass('video-player');
          media_container.addClass('video-player watched');
          scroll_container.show();
        }, 900);
      })
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
        header = media_container.find('.header');
        watched = !media_container.hasClass('unwatched');  
        
        if (watched) { 
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
      watched = !media_container.hasClass('unwatched');
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


      $(video).bind('ended', function() {
        $(video).addClass('hide');
        thumbnail.fadeIn(200);
        main_controls.remove();
        header.removeClass('hide');
        blur.fadeIn(200);
        media_container.find('.pause').removeClass('pause').addClass('play');
        setTimeout(function() {
          media_container.removeClass('playing');
          media_container.addClass('watched');
        }, 900);
      })
      event.stopPropagation();
      })
    
      .on('touchstart', '.video.call-to-action-controls', function(event) {
        event.stopPropagation();
      })
    
      .on('touchstart', '.media-container', function(event) {
        media_container = $(this);
        watched = !media_container.hasClass('unwatched');
        header = media_container.find('.header');
      
        if (watched) {
          header.toggleClass('hide');
        }
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




// TWITTER EMBED
function twitterEmbed() {
  var embed_window = document.createElement('div');
      embed_window.className = 'embed-window cover twitter-b icons-b abs ab-mid';
 
  var twitter_timeline = document.createElement('a');
      twitter_timeline.className = 'twitter-timeline';
      twitter_timeline.src = 'https://twitter.com/search?q=acolorblue';
      twitter_timeline.dataset.widgetId = '993524740462600192';


  $('.notification-center.icons-b').click(function() {
    $(this).toggleClass('selected');
    
    if ($('.embed-window').length == 0) {
      $('.desktop').prepend(embed_window);
      embed_window.append(twitter_timeline);
      
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
    setTimeout(function () {
      $(embed_window).toggleClass('slide-out');
    }, 10);
    
    var number_of_calls = 0;
    var iframe_height_interval = setInterval(iframeMobileHeight, 1);
    function iframeMobileHeight() {
     var desktop_height = $('.desktop').height();
      $('iframe.twitter-timeline').css('height', desktop_height);
      $('.timeline-Viewport').addClass('scroll-bar');

      if (++number_of_calls === 600) {
        window.clearInterval(iframe_height_interval);
      }
    }

    
    setTimeout(function () {
      $('.embed-window').removeClass('cover twitter-b icons-b abs');
    }, 2000);
  })
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
  // loader(); 
  firstImpressionContainer();
  userDeviceSpecifications();
  detectSizeChange(); 
  userActiveStatus();
  
  
  callRemainderFunctions();
}




// CALL REMAINDER FUNCTIONS
function callRemainderFunctions() {
  clock(); 
  backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');  
  closeTextEditor();
  searchTextEditor();  
  sharePage();
  videoPreloadChange(); 
    
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
  twitterEmbed();
  onFileClick();
}




// WINDOW ON ERROR
window.onerror = function(msg, url, linenumber) {
  // alert("An error has occured, please throw your device away immediately. lol nah i'm fucking with you but tell me what happened though.");
  
  function errorMessageApp() {
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
