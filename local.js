// LOADER
function loader() {
  var countdown_interval = setInterval(countdown, 1000);
  function countdown() {
    var countdown_origin = $('.countdown').text();
  
    
    if (countdown_origin >= 0) { 
      countdown_origin--;
      $('.countdown').text(countdown_origin);
      
      if (countdown_origin == 5) {
        $('.loader').addClass('hide');
      }
      
      if (countdown_origin == 2) {
        $('.loader .meme').addClass('show');
      }
      
      if (countdown_origin == 0) {
        window.clearInterval(countdown_interval);
        
        setTimeout(function() {
          $('.loader').remove();
        }, 3000);
        
        setTimeout(function() {
          automatedText('.scroll-container .first-block p', 2000, [''], 0, '-break-', 800);
        }, 4500);
      }
    } 
  }
}




// DEVICE SPECIFICATIONS
function userDeviceSpecifications() {
  if (mobile) {
    $('.text-editor').addClass('mobile');
    // manuallyCenter('.desktop', '.text-editor');
  }
  
  if (desktop) {
    $('.text-editor').addClass('computer');
    manuallyCenter('.desktop', '.text-editor');
    
    function draggableApp() {
      $('.text-editor').draggable({
        handle: '.header',
        cursor: 'move', 
        drag: function(event, ui) {
          backgroundImageBlur('.mac-os', '.text-editor', '.text-editor .blur');
        }
      });
    } 
    draggableApp();
  }
   
  if (firefox) {
    var browser_alert = document.createElement('div');
        browser_alert.className = 'browser-alert ab-mid';
        browser_alert.innerHTML = "Please use Chrome or Safari. Firefox has ugly scrollbars.";
    
    $('.menu-bar').remove();
    $('.desktop').remove();
    $('.mac-os').append(browser_alert);
  }
}

 


// DETECT SIZE CHANGE
function detectSizeChange() {   
  $('.mac-os, .text-editor').mutate('width height top left', function(el, info) {
    if (desktop) {
      if (!$('.text-editor').hasClass('ui-draggable-dragging')) {
        manuallyCenter('.desktop', '.text-editor');
      }
    }
    
    backgroundImageBlur('.mac-os', '.text-editor', '.text-editor .blur'); 
    automatedScrollAdjustment();
  });
}




// BACKGROUND IMAGE BLUR
function backgroundImageBlur(container, element, blur) {
  var container_background_image = $(container).css('background-image'),
      container_width = $(container).width(),
      container_height = $(container).height(),
      menu_bar_height = $('.menu-bar').height(),
      element_top = $(element).css('top'),
      element_left = $(element).css('left'),
      element_top = parseFloat(element_top) + parseInt(menu_bar_height);
  
  if (container_background_image != $(blur).css('background-image')) {
    $(blur).css('background-image', container_background_image);
  }
  $(blur).css('width', container_width);
  $(blur).css('height', container_height);
  $(blur).css('top', '-' + element_top.toFixed(2) + 'px');
  $(blur).css('left', '-' + element_left);

  if (mobile) {
    if (window.orientation == 0) {
      $(blur).removeClass('cover').addClass('contain');
      return;
    }

    if (window.orientation == -90 || 90) {
      $(blur).removeClass('contain').addClass('cover');
      return;
    } 
  }

  if (desktop) { 
    if ($(container).width() < 1000) {
      $(blur).removeClass('cover').addClass('contain');
    }

    if ($(container).width() >= 1000) {
      $(blur).removeClass('contain').addClass('cover');
    }
  }
}




// CLOSE TEXT EDITOR
function closeTextEditor() {
  $('.text-editor .close').click(function() {
    $(this).parents('.text-editor').addClass('hide');
    $('video').each(function () {
      var video = $(this).get(0);
      if (!video.paused) {
        video.pause(); 
      }
    });
    $('.file').removeClass('selected');

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
        $('.text-editor .title').show();
        return;
      }, 100); 
    }

    if ($('.search-bar').length == 0) {
      if ($('p').hasClass('unread')) {
        $('.text-editor .title').text("Damn Finish Reading First");
        setTimeout(function() {
          $('.text-editor .title').text("A Kanye West Analysis");
        }, 2500);
      }
      
      if (!$('p').hasClass('unread')) {
        $('.main-controls').after(search_bar);
        $('.text-editor .title').hide();
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
      var poster_link = 'https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Poster3.jpg', 
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

        if ($('.poster').length == 1) {
          return;
        }

        if ($('.search-bar').length == 1) {
          $('.search-bar').addClass('hide');
          setTimeout(function() {
            $('.search-bar').remove();
            $('.text-editor .title').show();
          }, 100);
        }  

        function closeShare() {
          poster.remove();
          $('.share.call-to-action-controls').hide();
          $('.text-editor .title').text("A Kanye West Analysis");
          $('.text-editor').removeClass('instagram-share');
          $('.text.call-to-action-controls, .text.call-to-action-controls .search').show();
          $('.text-editor .scroll-container').show();
          automatedScrollAdjustment();
        }

        
        $('.text-editor').addClass('instagram-share');
        $('.text-editor .scroll-container').hide();
        $('.text-editor .parent-container').prepend(poster);
        $('.text-editor .title').text("Save Image Then Confirm");

        // NEW
        $('.text.call-to-action-controls').hide();
        
        var call_to_action_controls = document.createElement('div');
            call_to_action_controls.className = 'call-to-action-controls share';

        var call_to_action = document.createElement('button');

        $('.top-bar').append(call_to_action_controls);
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


      if ($(this).hasClass('tumblr-b')) {
        window_link = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + poster_link + '&caption=' + '<a href=\''+  webpage + '\'>' + '<i>' + caption.slice(0, 21) + '</i></a>' + caption.slice(21);

        window.open(window_link);
      }

      $('.social-share-container').remove();
    })

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
  var current_paragraph,
      header_height,
      media_container_height,
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
  
  function appendPlaybackControls() {
    $('.text.call-to-action-controls').hide();
    
    var call_to_action_controls = document.createElement('div');
        call_to_action_controls.className = 'call-to-action-controls video';
    
    var call_to_action = document.createElement('button');
        call_to_action.className = 'white icons-b abs';
    
    $('.top-bar').append(call_to_action_controls);
    call_to_action.className += ' rewind';
    call_to_action_controls.prepend(call_to_action.cloneNode(true));
    
    call_to_action.className += ' forward';
    call_to_action_controls.append(call_to_action.cloneNode(true));
  }
  
  function showPlaybackControls() {
    $('.text.call-to-action-controls').hide();
    $('.video.call-to-action-controls').show();
  }
  
  function hideInstagramShare() {
    if ($('.text-editor').hasClass('instagram-share')) {
      $('img.poster').remove();
      $('.share.call-to-action-controls').hide();
      $('.text-editor').removeClass('instagram-share');
    } 
  }

  
  // MALCOLM X POLICE VERDICT
  first_block_interval = setInterval(firstBlock, 10);
  function firstBlock() {
    $('p.active').each(function() {  
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("\“That’s too much power for one man to have.\”")) {
        window.clearInterval(first_block_interval);   
        
        setTimeout(function() {
          hideInstagramShare();

          if (desktop) {
            $('.malcolm-x-police-predict').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.malcolm-x-police-predict').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.malcolm-x-police-predict').parents('.media-container'));
            $('.header .title').text("'Police Precinct' scene from Malcolm X (1992)");
            appendPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player');
          }, 700);

          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.malcolm-x-police-predict').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.malcolm-x-police-predict').bind('ended', function() { 
          setTimeout(function() {
            $('.first-block').after($('.malcolm-x-police-predict').parents('.media-container'));
          }, 1000);
          
          if ($('.second-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .second-block p', 2000, [], 0, '-break-', 1000);
              second_block_interval = setInterval(secondBlock, 10);
            }, 2000);
          }  
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.kanye-to-cudi').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.kanye-to-cudi').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.kanye-to-cudi').parents('.media-container'));
            $('.header .title').text("Kanye West responded to Kid Cudi");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.kanye-to-cudi').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.kanye-to-cudi').bind('ended', function() {
          setTimeout(function() {
            $('.second-block').after($('.kanye-to-cudi').parents('.media-container'));
          }, 1000);
          
          if ($('.third-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .third-block p', 2000, [], 0, '-break-', 1000);
              third_block_interval = setInterval(thirdBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.radio-fuck-you').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.radio-fuck-you').parents('.media-container').show();
          }

          setTimeout(function() { 
            $('.parent-container').append($('.radio-fuck-you').parents('.media-container'));
            $('.header .title').text("Kanye\'s Sacremento Rant from November 2016");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.radio-fuck-you').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.radio-fuck-you').bind('ended', function() {
          setTimeout(function() {
            $('.third-block').after($('.radio-fuck-you').parents('.media-container'));
          }, 1000); 
             
          if ($('.fourth-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .fourth-block p', 2000, [], 0, '-break-', 1000);
              fourth_block_interval = setInterval(fourthBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.malcolm-x-on-goldwater').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.malcolm-x-on-goldwater').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.malcolm-x-on-goldwater').parents('.media-container'));
            $('.header .title').text("Malcolm X On Barry Goldwater, 1964");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.malcolm-x-on-goldwater').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.malcolm-x-on-goldwater').bind('ended', function() {
          setTimeout(function() {
            $('.fourth-block').after($('.malcolm-x-on-goldwater').parents('.media-container'));
          }, 1000); 
          
          if ($('.fifth-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .fifth-block p', 2000, [], 0, '-break-', 1000);
              fifth_block_interval = setInterval(fifthBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.malcolm-x-on-mlk').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.malcolm-x-on-mlk').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.malcolm-x-on-mlk').parents('.media-container'));
            $('.header .title').text("Malcolm X & Louis Lomax On Martin Luther King, 1963");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.malcolm-x-on-mlk').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.malcolm-x-on-mlk').bind('ended', function() {
          setTimeout(function() {
            $('.fifth-block').after($('.malcolm-x-on-mlk').parents('.media-container'));
          }, 1000); 
                
          if ($('.sixth-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .sixth-block p', 2000, [], 0, '-break-', 1000);
              sixth_block_interval = setInterval(sixthBlock, 10);
            }, 2000);
          }
        })
      }
    })
  }
  
  
  // WIZ TWEETS & SLAVERY WAS A CHOICE
  function sixthBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      
      if ($(this).hasClass('kanye-wiz-tweets')) {
        $(this).css('display', 'inline');
      }
      
      if (current_paragraph.includes("TLOP because it was just too personal,")) {
        $('.tweet-5').show().addClass('show');
        $('.tweet-5').css('-webkit-animation', 'pop-up-image-transition 7s ease-in-out infinite');

        setTimeout(function() {
          $('.tweet-13').show().addClass('show');
        }, 6000);

        setTimeout(function() {
          $('.tweet-5').remove();
        }, 7000); 

        setTimeout(function() {
          $('.tweet-13').remove();
        }, 10500); 
      }
      
      if (current_paragraph.includes("You was there for 400 years and it’s all of y’all??\”")) {
        window.clearInterval(sixth_block_interval);
        
        setTimeout(function() {
          hideInstagramShare();

          if (desktop) {
            $('.slavery-was-a-choice').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.slavery-was-a-choice').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.slavery-was-a-choice').parents('.media-container'));
            $('.header .title').text("Kanye on the choice of slavery");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.slavery-was-a-choice').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.slavery-was-a-choice').bind('ended', function() {
          setTimeout(function() {
            $('.sixth-block').after($('.slavery-was-a-choice').parents('.media-container'));
          }, 1000); 
          
          if ($('.seventh-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .seventh-block p', 2000, [], 0, '-break-', 1000);
              seventh_block_interval = setInterval(seventhBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.candace-owens-economics').parents('.media-container').slideDown(500);
          } 

          if (mobile) {
            $('.candace-owens-economics').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.candace-owens-economics').parents('.media-container'));
            $('.header .title').text("Candace Owens on economics over social issues");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.candace-owens-economics').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.candace-owens-economics').bind('ended', function() {
          setTimeout(function() {
            $('.seventh-block').after($('.candace-owens-economics').parents('.media-container'));
          }, 1000); 
          
          if ($('.eight-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .eight-block p', 2000, [], 0, '-break-', 1000);
              eight_block_interval = setInterval(eightBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();

          if (desktop) {
            $('.we-make-good-music').parents('.media-container').slideDown(500);
          }

          if (mobile) {
            $('.we-make-good-music').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.we-make-good-music').parents('.media-container'));
            $('.header .title').text("We Make Good Music");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.we-make-good-music').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.we-make-good-music').bind('ended', function() {
          setTimeout(function() {
            $('.eight-block').after($('.we-make-good-music').parents('.media-container'));
          }, 1000); 
          
          if ($('.ninth-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .ninth-block p', 2000, [], 0, '-break-', 1000);
              ninth_block_interval = setInterval(ninthBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();
          if (mobile) {
            $('.george-bush-explanation').parents('.media-container').show();
          }

          if (desktop) {
            $('.george-bush-explanation').parents('.media-container').slideDown(500);
          }

          setTimeout(function() {
            $('.parent-container').append($('.george-bush-explanation').parents('.media-container'));
            $('.header .title').text("Kanye the root of is motive");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.george-bush-explanation').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.george-bush-explanation').bind('ended', function() {
          setTimeout(function() {
            $('.ninth-block').after($('.george-bush-explanation').parents('.media-container'));
          }, 1000); 
          
          if ($('.tenth-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .tenth-block p', 2000, [], 0, '-break-', 1000);
              tenth_block_interval = setInterval(tenthBlock, 10);
            }, 2000);
          }
        })
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
          hideInstagramShare();
          if (desktop) {
            $('.macintosh-team').parents('.media-container').slideDown(500);
          }

          if (mobile) {
            $('.macintosh-team').parents('.media-container').show();
          }

          setTimeout(function() {
            $('.parent-container').append($('.macintosh-team').parents('.media-container'));
            $('.header .title').text("On the creation of the MacIntosh, 1985");
            showPlaybackControls();
          }, 500);

          setTimeout(function() {
            $('.text-editor').addClass('video-player'); 
          }, 700);
          
          if (mobile) {
            setTimeout(function() {
              header_height = $('.text-editor .header').height();
              media_container_height = $('.macintosh-team').parents('.media-container').height();
              $('.text-editor.video-player').css('height', header_height + media_container_height); 
            }, 1000); 
          }
        }, 1000);
        
        $('.macintosh-team').bind('ended', function() {
          setTimeout(function() {
            $('.tenth-block').after($('.macintosh-team').parents('.media-container'));
          }, 1000); 
          
          if ($('.eleventh-block p:first-child').is(':hidden')) {
            setTimeout(function() {
              automatedText('.scroll-container .eleventh-block p', 2000, [], 0, '-break-', 1000);
              ending_interval = setInterval(theEnd, 10);
            }, 2000);
          }
        })
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
            $('.scroll-container').css('transition', 'margin-top 1s ease-in-out');
            $('.scroll-container').css('margin-top', '0px');
          }
          disableAutomatedScroll();
          

          function mediaControlsAdjustments() {
            $('.controls').removeClass('full');
            $('.controls').addClass('corner');
            $('.controls .post-link').show();
            
            $('.controls .post-link').click(function(event) {
              event.stopPropagation();
            })
          }
          mediaControlsAdjustments();
          
          
          function videoActiveOnClick() {
            if (mobile) {
              $(document).off('touchstart', '.media-container.video');
              
              $(document).on('touchstart', '.play-pause', function(event) {
                var media_container = $(this).parents('.media-container');
                var thumbnail = media_container.find('.thumbnail');
                var video = media_container.find('video')[0];
                var controls = media_container.find('.controls');
                var play_pause = media_container.find('.controls .play-pause');
                var post_link = media_container.find('.controls .post-link');
                var paused =  video.paused;
                var playing = !video.paused;
                
                enableInlineVideo(video);

                if ($(media_container).hasClass('not-clicked')) {
                  $(media_container).removeClass('not-clicked');
                }

                if (paused) {
                  thumbnail.hide();
                  video.play(); 
                  play_pause.removeClass('play');
                  play_pause.addClass('pause');
                }

                else if (playing) {
                  video.pause(); 
                  thumbnail.show();
                  play_pause.removeClass('pause');
                  play_pause.addClass('play');
                }

                $(video).bind('ended', function() {
                  thumbnail.show();
                  play_pause.removeClass('pause');
                  play_pause.addClass('play');
                })
                event.stopPropagation();
              })
            }
          }
          videoActiveOnClick();
        }, 4000);
      }
    })
  }
}


  

// MEDIA PLAYER
function mediaPlayer() { 
  var text_editor = $('.text-editor'),
      text_editor_title = $('.text-editor .header .title'),
      text_call_to_action_controls = $('.text.call-to-action-controls'),
      video_call_to_action_controls,
      video_call_to_action_controls_button,
      search_button = $('.search'),
      parent_content_container = $('.parent-container'),
      scroll_container = $('.scroll-container'),
      media_container,
      thumbnail,
      video,
      current_time,
      controls,
      post_link,
      paused,
      playing; 
  
  if (desktop) {
    $(document).on('click', '.media-container.video', function(event) {
       video_call_to_action_controls = $('.video.call-to-action-controls');
       video_call_to_action_controls_button =  $('.video.call-to-action-controls button');
       media_container = $(this);
       thumbnail = $(this).find('.thumbnail');
       video = $(this).find('video')[0];
       controls = $(this).find('.controls');
       post_link = $(this).find('.controls .post-link');
       paused =  video.paused;
       playing = !video.paused;

      if ($(this).hasClass('not-clicked')) {
        $(this).removeClass('not-clicked');
      }

      if (paused) {
        controls.hide();
        thumbnail.hide();
        video.play(); 

        $(video_call_to_action_controls_button).click(function() {
          current_time = video.currentTime;
          
          if ($(this).hasClass('rewind')) {
            video.currentTime = current_time - 4;
          }

          if ($(this).hasClass('forward')) {
            video.currentTime = current_time + 4;
          }
        })
      }

      else if (playing) {
        video.pause(); 
        thumbnail.show();
        controls.show();
      }
      

      $(video).bind('ended', function() {
        thumbnail.show();
        controls.show();
        setTimeout(function() {
          video_call_to_action_controls.hide();
          text_editor.removeClass('video-player');
          text_editor_title.text("A Kanye West Analysis");
          text_call_to_action_controls.show();
          search_button.show();
          scroll_container.show();
        }, 900);
      })
      event.stopPropagation();
    })
  }
  
  
  if (mobile) {
    if ($('p').hasClass('unread')) {
      $(document).on('touchstart', '.media-container.video', function(event) {
         video_call_to_action_controls = $('.video.call-to-action-controls');
         video_call_to_action_controls_button =  $('.video.call-to-action-controls button');
         media_container = $(this);
         thumbnail = $(this).find('.thumbnail');
         video = $(this).find('video')[0];
         controls = $(this).find('.controls');
         post_link = $(this).find('.controls .post-link');
         paused =  video.paused;
         playing = !video.paused;
        
        enableInlineVideo(video);

        if ($(this).hasClass('not-clicked')) {
          $(this).removeClass('not-clicked');
        }

        if (paused) {
          controls.hide();
          thumbnail.hide();
          video.play(); 
          
          
          $(video_call_to_action_controls_button).click(function() {
            current_time = video.currentTime;

            if ($(this).hasClass('rewind')) {
              video.currentTime = current_time - 4;
            }

            if ($(this).hasClass('forward')) {
              video.currentTime = current_time + 4;
            }
          })
        }

        else if (playing) {
          video.pause(); 
          thumbnail.show();
          controls.show();
        }

        $(video).bind('ended', function() {
          thumbnail.show();
          controls.show();
          setTimeout(function() {
            video_call_to_action_controls.hide();
            text_editor.removeClass('video-player');
            text_editor.css('height', '90%');
            text_editor_title.text("A Kanye West Analysis");
            text_call_to_action_controls.show();
            search_button.show();
            scroll_container.show();
          }, 900);
        })
        event.stopPropagation();
      })
    }
  }
}




// AUTOMATED SCROLL READJUSTMENT
function automatedScrollAdjustment() {
  var parent_container_height = $('.parent-container').height();

  if ($('p').hasClass('unread')) {
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
  loader();
  userDeviceSpecifications();
  detectSizeChange();
  clock(); 
  backgroundImageBlur('.mac-os', '.text-editor', '.text-editor .blur');
  closeTextEditor();
  searchTextEditor();
  sharePage();
  // automatedText('.scroll-container .first-block p', 2000, [''], 0, '-break-', 800);
  mediaAfterParagraphs();
  mediaPlayer();
  twitterEmbed();
  onFileClick();
}




// WINDOW ON ERROR
window.onerror = function(msg, url, linenumber) {
  alert("An error has occured, please throw your device away immediately. lol nah i'm fucking with you but refresh the page though.");
  console.log('Error message: '+ msg +'\nURL: '+ url +'\nLine Number: '+ linenumber);
  return true;
}
