// ON MOBILE
function userDevice() {
  if (ios || android) {
    var portrait = window.orientation == 0;
    var landscape = window.orientation == -90 || 90;
    
    function orientationChange() {
      if (window.orientation == 0) {
        $('.text-editor').addClass('right-corner');
      }
      window.addEventListener('orientationchange', function() {
        if (window.orientation == 0) {
          $('.text-editor').addClass('right-corner');
          return;
        }

        if (window.orientation == -90 || 90) {
          $('.text-editor').removeClass('right-corner');
          return;
        }
      });
    }
    orientationChange();
  }

  if(navigator.userAgent.indexOf("Firefox") != -1) {
    var alert = document.createElement('div');
        alert.className = 'alert ab-mid';
        alert.innerHTML = "Please use Chrome or Safari. Firefox has ugly scrollbars.";
    
    $('.menu-bar').remove();
    $('.desktop').remove();
    
    $('.mac-os').append(alert);
  }
}




// DISABLE READER
function disableBrowserReader() {
  var meta_scale = document.createElement('meta');
      meta_scale.name = 'viewport';
      meta_scale.content = 'width=device-width, initial-scale=0.75';
      
  setTimeout(function() {
    $('head').append(meta_scale);
  }, 1300);
  
  
  setTimeout(function() {
    $('body').removeClass('loader');
  }, 4500); 
}
    


 
// FILE CLICK 
function onFileClick() {
  $('.file')  
    .on('click', function() {
    if ($(this).hasClass('selected')) {
      return;
    }

    if (!$(this).hasClass('selected')) {
      if ($(this).find('.title').text() == $('.text-editor .title').text()) {
        $(this).addClass('selected');
        $('.text-editor').removeClass('hide');
        $('.screensaver-credits').removeClass('show');
      }
    }
  })

    .on('contextmenu', function() {
    return false;
  })

    .on('dragstart', function(event) { 
    event.preventDefault(); 
  }) 
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

      if (++number_of_calls === 500) {
        window.clearInterval(iframe_height_interval);
      }
    }

    
    setTimeout(function () {
      $('.embed-window').removeClass('cover twitter-b icons-b abs');
    }, 2000);
  })
}




// TEXT EDITOR BACKGROUD IMAGE
function textEditorBackgroundImage() {
//   var device_width = $('.mac-os').width();
//   var device_height = $('.mac-os').height();

//   console.log(device_width);
//   console.log(device_height);
  
//   $('.blurred').css('background-size', device_width, device_height);
}




// CLOSE TEXT EDITOR
function closeTextEditor() {
  $('.text-editor .close').click(function() {
    $(this).parents('.text-editor').addClass('hide');
    $('.file').removeClass('selected');

    var screensaver_credits = document.createElement('span');
        screensaver_credits.className = 'screensaver-credits ab-mid';
    
    var screensaver_credits_text = document.createElement('span');
        screensaver_credits_text.className = 'text';
        screensaver_credits_text.innerHTML = "Sahel, Mali by Steve McCurry, 1986.";

    if ($('.screensaver-credits').length == 0) {
      $('.mac-os').append(screensaver_credits);
      screensaver_credits.append(screensaver_credits_text);
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

    var original_content = $('.text-editor .parent-content-container').html();
    var original_children = $('.text-editor .parent-content-container').children();
    

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
        $('.text-editor .title').text("Nigga Finish Reading First Damn");
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
          $('.text-editor .parent-content-container').html(original_content);
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
      $('.call-to-action-controls').prepend(social_share_container);
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
      var poster = 'https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Poster3.jpg', 
          webpage = 'https://acolorblue.co/a-kanye-west-analysis',
          line_break = '%0A',
          caption = "A Kanye West Analysis, by @acolorblue.",
          window_link;

      var image_preview = document.createElement('img');
          image_preview.className = 'image-preview';
          image_preview.src = poster;

      var action_button = document.createElement('button');

      if ($(this).hasClass('twitter-b')) {
        window_link = 'https://twitter.com/intent/tweet?source=webclient&text=' + caption + line_break + webpage;

        window.open(window_link);
      }


      if ($(this).hasClass('instagram-b')) {
        window_link = 'instagram://camera';
        if (android) {
          window_link = 'https://www.instagram.com/_u/acolorblue';
        }

        if ($('.image-preview').length == 1) {
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
          image_preview.remove();
          $('.text-editor .confirm-action').remove();
          $('.text-editor .cancel-action').remove();
          $('.text-editor .title').text("A Kanye West Analysis");
          $('.text-editor .search').show();
          $('.text-editor .share').show();
          $('.text-editor .scroll-container').show();
        }

        
        $('.text-editor .scroll-container').hide();
        $('.text-editor .parent-content-container').prepend(image_preview);
        $('.text-editor .title').text("Save Image Then Confirm");

        $('.text-editor .search').hide();
        action_button.className = 'confirm-action';
        action_button.innerHTML = "Confirm";
        $('.text-editor .call-to-action-controls').append(action_button.cloneNode(true));
        $('.text-editor .confirm-action').click(function() {
          window.location.href = window_link;
          closeShare();
        });

        $('.text-editor .share').hide();
        action_button.className = 'cancel-action';
        action_button.innerHTML = "Cancel";
        $('.text-editor .call-to-action-controls').append(action_button.cloneNode(true));
        $('.text-editor .cancel-action').click(function() {
          closeShare();
        });
      }


      if ($(this).hasClass('tumblr-b')) {
        window_link = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + poster + '&caption=' + '<a href=\''+  webpage + '\'>' + '<i>' + caption.slice(0, 21) + '</i></a>' + caption.slice(21);

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
      
      
      
      
      
      
      
      function detectSizeChange() {   
        var line_height = $('.scroll-container p').height();     
        var margin_top = 0;
 
        $('.scroll-container').mutate('height', function(el, info) {
          if ($('p').hasClass('unread')) {
            function automatedScroll() {
              if (!$('body').hasClass('loader')) {
                var parent_container_height = $('.parent-content-container').height();
              }

              // $('.text-editor .title').text('scroll container height:' + $(el).height());
              // $('.name').text('content container height:' + parent_container_height);

              var current_scroll_container_height = $('.scroll-container').height();
              if (current_scroll_container_height >= parent_container_height) {
                margin_top = -current_scroll_container_height - -parent_container_height;
                $('.scroll-container').css('margin-top', margin_top);
              } 
            }
            automatedScroll();
          }
        });
      }
      detectSizeChange();
    }
  }
  
  $('button.cancel-automated-text').click(function() {
    booSkipAutomatedText = true;
  })
}




// MEDIA MAIN
function mediaMain() {
  var current_paragraph,
      after_first_block_interval,
      after_second_block_interval,
      after_third_block_interval,
      ending_interval;
  
  
  after_first_block_interval = setInterval(afterFirstBlock, 10);
  function afterFirstBlock() {
    $('p.active').each(function() {  
      current_paragraph = $(this).text();
      console.log("first block");
      
      if (current_paragraph.includes("(A candidate backed by the KKK) he states,")) {
        window.clearInterval(after_first_block_interval);
        
        $('.malcolm-x-on-goldwater')[0].load();
        $('.malcolm-x-on-goldwater').parents('.media-container').show();
        setTimeout(function() {
          if ($('.malcolm-x-on-goldwater').prev('img.poster')[0].complete == true) {
            // $('.malcolm-x-on-goldwater').parents('.media').css('opacity', '1');
            $('.malcolm-x-on-goldwater').parents('.media-container').css('opacity', '1');
          }
        }, 1000);
        $('.malcolm-x-on-goldwater').bind('ended', function() {
            setTimeout(function() {
              if ($('.second-block').hasClass('unread')) {
                automatedText('.scroll-container .second-block', 2000, [], 0, '-break-', 1000);
                after_second_block_interval = setInterval(afterSecondBlock, 10);
              }
            }, 2000);
          })
      }
    })
  }
  

  function afterSecondBlock() {
    $('p.active').each(function() {
      current_paragraph = $(this).text();
      console.log("second block");
      
      if (current_paragraph.includes("wrong approach, stating in his apology")) {
        window.clearInterval(after_second_block_interval);
        
        $('.george-bush-apology')[0].load();
        $('.george-bush-apology').parents('.media-container').show();
        setTimeout(function() {
          if ($('.george-bush-apology').prev('img.poster')[0].complete == true) {
            // $('.george-bush-apology').parents('.media').css('opacity', '1');
            $('.george-bush-apology').parents('.media-container').css('opacity', '1');
          }
        }, 1000);
        $('.george-bush-apology').bind('ended', function() {
            if ($('.third-block').hasClass('unread')) {
              setTimeout(function() {
                automatedText('.scroll-container .third-block', 2000, [], 0, '-break-', 1000);
                after_third_block_interval = setInterval(afterThirdBlock, 10);
              }, 2000);
            }
          })
      }
    })
  }
  
  
  function afterThirdBlock() {
    $('p').each(function() {
      current_paragraph = $(this).text();
      console.log("third block");
      
      if (current_paragraph.includes("just show them clearly where they are going.")) {
        window.clearInterval(after_third_block_interval);
        
        setTimeout(function() {
          $('.steve-jobs-on-vision-articulation')[0].load();
          $('.steve-jobs-on-vision-articulation').parents('.media-container').show();
          setTimeout(function() {
            if ($('.steve-jobs-on-vision-articulation').prev('img.poster')[0].complete == true) {
              // $('.steve-jobs-on-vision-articulation').parents('.media').css('opacity', '1');
              $('.steve-jobs-on-vision-articulation').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 500); 
        $('.steve-jobs-on-vision-articulation').bind('ended', function() {
            if ($('.fourth-block').hasClass('unread')) {
              setTimeout(function() {
                automatedText('.scroll-container .fourth-block', 2000, [], 0, '-break-', 1000);
                ending_interval = setInterval(theEnd, 10);
              }, 2000);
            }
          })
      }
    })
  }
  
  
  function theEnd() {
    $('p').each(function() {
      current_paragraph = $(this).text();
      console.log("Ending Funtions");
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
            if (ios || android) {
              $(document).off('touchstart', '.media-container.video');
              
              $(document).on('touchstart', '.play-pause', function(event) {
                var media_container = $(this).parents('.media-container');
                var poster = media_container.find('.poster');
                var video = media_container.find('video')[0];
                var controls = media_container.find('.controls');
                var play_pause = media_container.find('.controls .play-pause');
                var post_link = media_container.find('.controls .post-link');
                var paused =  video.paused;
                var playing = !video.paused;

                if ($(media_container).hasClass('not-clicked')) {
                  $(media_container).removeClass('not-clicked');
                }

                if (paused) {
                  poster.hide();
                  video.play(); 
                  play_pause.removeClass('play');
                  play_pause.addClass('pause');
                }

                else if (playing) {
                  video.pause(); 
                  poster.show();
                  play_pause.removeClass('pause');
                  play_pause.addClass('play');
                }

                $(video).bind('ended', function() {
                  poster.show();
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
  if (!ios || android) {
    $(document).on('click', '.media-container.video', function(event) {
      var media_container = $(this);
      var poster = $(this).find('.poster');
      var video = $(this).find('video')[0];
      var controls = $(this).find('.controls');
      var post_link = $(this).find('.controls .post-link');
      var paused =  video.paused;
      var playing = !video.paused;

      if ($(this).hasClass('not-clicked')) {
        $(this).removeClass('not-clicked');
      }

      if (paused) {
        controls.hide();
        poster.hide();
        video.play(); 
      }

      else if (playing) {
        video.pause(); 
        poster.show();
        controls.show();
      }

      $(video).bind('ended', function() {
        poster.show();
        controls.show();
      })
      event.stopPropagation();
    })
  }
  
  
  if (ios || android) {
    enableInlineVideo($('video')[0]);
    
    if ($('p').hasClass('unread')) {
      $(document).on('touchstart', '.media-container.video', function(event) {
        var media_container = $(this);
        var poster = $(this).find('.poster');
        var video = $(this).find('video')[0];
        var controls = $(this).find('.controls');
        var post_link = $(this).find('.controls .post-link');
        var paused =  video.paused;
        var playing = !video.paused;

        if ($(this).hasClass('not-clicked')) {
          $(this).removeClass('not-clicked');
        }

        if (paused) {
          controls.hide();
          poster.hide();
          video.play(); 
        }

        else if (playing) {
          video.pause(); 
          poster.show();
          controls.show();
        }

        $(video).bind('ended', function() {
          poster.show();
          controls.show();
          // post_link.show();
        })
        event.stopPropagation();
      })
    }
  }
}


 

// WINDOW ON LOAD
window.onload = function() {
  disableBrowserReader();
  userDevice();
  setInterval(function() {
    clock(); 
  }, 1000);
  onFileClick();
  twitterEmbed();
  textEditorBackgroundImage();
  closeTextEditor();
  searchTextEditor();
  sharePage();
  setTimeout(function() {
    automatedText('.scroll-container .first-block', 2000, [''], 0, '-break-', 800);
  }, 3500); 
  mediaMain();
  mediaPlayer();
}
