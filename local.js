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
  }
  
  if (desktop) {
    $('.text-editor').addClass('computer');

    function draggableApp() {
      manuallyCenter('.desktop', '.text-editor');
      $('.text-editor').draggable({
        handle: '.header',
        cursor: 'move', 
        drag: function(event, ui) {
          textEditorBlur();
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
  $('.mac-os').mutate('width height', function(el, info) {
    if (desktop) {
      manuallyCenter('.desktop', '.text-editor');
    }
    
    if (mobile) {
    }
    
    textEditorBlur(); 
    automatedScrollAdjustment();
  });
}




// TEXT EDITOR BACKGROUD IMAGE
function textEditorBlur() {
  var container_background_image = $('.mac-os').css('background-image'),
      mac_os_width = $('.mac-os').width(),
      mac_os_height = $('.mac-os').height(),
      menu_bar_height = $('.menu-bar').height(),
      text_editor_top = $('.text-editor').css('top'),
      text_editor_left = $('.text-editor').css('left'),
      text_editor_top = parseFloat(text_editor_top) + parseInt(menu_bar_height);
  
  if (container_background_image != $('.blur').css('background-image')) {
    $('.blur').css('background-image', container_background_image);
  }
  $('.blur').css('width', mac_os_width);
  $('.blur').css('height', mac_os_height);
  $('.blur').css('top', '-' + text_editor_top.toFixed(2) + 'px');
  $('.blur').css('left', '-' + text_editor_left);

  if (mobile) {
    if (window.orientation == 0) {
      $('.text-editor .blur').removeClass('cover').addClass('contain');
      return;
    }

    if (window.orientation == -90 || 90) {
      $('.text-editor .blur').removeClass('contain').addClass('cover');
      return;
    } 
  }

  if (desktop) { 
    if ($('.mac-os').width() < 1000) {
      $('.text-editor .blur').removeClass('cover').addClass('contain');
    }

    if ($('.mac-os').width() >= 1000) {
      $('.text-editor .blur').removeClass('contain').addClass('cover');
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
        $('.text-editor .title').text("Nigga Finish Reading First");
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
      var poster_link = 'https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Poster3.jpg', 
          webpage = 'https://acolorblue.co/a-kanye-west-analysis',
          line_break = '%0A',
          caption = "A Kanye West Analysis, by @acolorblue.",
          window_link;

      var poster = document.createElement('img');
          poster.className = 'poster';
          poster.src = poster_link;

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
          $('.text-editor .confirm-action').remove();
          $('.text-editor .cancel-action').remove();
          $('.text-editor .title').text("A Kanye West Analysis");
          $('.text-editor .search').show();
          $('.text-editor .share').show();
          $('.text-editor .scroll-container').show();
          automatedScrollAdjustment();
        }

        
        $('.text-editor .scroll-container').hide();
        $('.text-editor .parent-content-container').prepend(poster);
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
  
  var pop_up_image = document.createElement('img');
      pop_up_image.className = 'pop-up-image';
  
  
  // MALCOLM X POLICE VERDICT
  first_block_interval = setInterval(firstBlock, 10);
  function firstBlock() {
    $('p.active').each(function() {  
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("\“That’s too much power for one man to have.\”")) {
        window.clearInterval(first_block_interval);   
        
        setTimeout(function() {
          // $('.malcolm-x-police-predict')[0].load();
          $('.malcolm-x-police-predict').parents('.media-container').show();
          setTimeout(function() {
            if ($('.malcolm-x-police-predict').prev('img.thumbnail')[0].complete == true) {
              $('.malcolm-x-police-predict').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.malcolm-x-police-predict').bind('ended', function() {
          setTimeout(function() {
            if ($('.second-block p').hasClass('unread')) {
              automatedText('.scroll-container .second-block p', 2000, [], 0, '-break-', 1000);
              second_block_interval = setInterval(secondBlock, 10);
            }
          }, 2000);
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
          // $('.kanye-to-cudi')[0].load();
          $('.kanye-to-cudi').parents('.media-container').show();
          setTimeout(function() {
            if ($('.kanye-to-cudi').prev('img.thumbnail')[0].complete == true) {
              $('.kanye-to-cudi').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.kanye-to-cudi').bind('ended', function() {
          if ($('.third-block p').hasClass('unread')) {
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
          // $('.radio-fuck-you')[0].load();
          $('.radio-fuck-you').parents('.media-container').show();
          setTimeout(function() {
            if ($('.radio-fuck-you').prev('img.thumbnail')[0].complete == true) {
              $('.radio-fuck-you').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.radio-fuck-you').bind('ended', function() {
            if ($('.fourth-block p').hasClass('unread')) {
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
          // $('.malcolm-x-on-goldwater')[0].load();
          $('.malcolm-x-on-goldwater').parents('.media-container').show();
          setTimeout(function() {
            if ($('.malcolm-x-on-goldwater').prev('img.thumbnail')[0].complete == true) {
              $('.malcolm-x-on-goldwater').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.malcolm-x-on-goldwater').bind('ended', function() {
            if ($('.fifth-block p').hasClass('unread')) {
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
          // $('.malcolm-x-on-mlk')[0].load();
          $('.malcolm-x-on-mlk').parents('.media-container').show();
          setTimeout(function() {
            if ($('.malcolm-x-on-mlk').prev('img.thumbnail')[0].complete == true) {
              $('.malcolm-x-on-mlk').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.malcolm-x-on-mlk').bind('ended', function() {
            if ($('.sixth-block p').hasClass('unread')) {
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
          // $('.slavery-was-a-choice')[0].load();
          $('.slavery-was-a-choice').parents('.media-container').show();
          setTimeout(function() {
            if ($('.slavery-was-a-choice').prev('img.thumbnail')[0].complete == true) {
              $('.slavery-was-a-choice').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.slavery-was-a-choice').bind('ended', function() {
            if ($('.seventh-block p').hasClass('unread')) {
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
          // $('.candace-owens-economics')[0].load();
          $('.candace-owens-economics').parents('.media-container').show();
          setTimeout(function() {
            if ($('.candace-owens-economics').prev('img.thumbnail')[0].complete == true) {
              $('.candace-owens-economics').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.candace-owens-economics').bind('ended', function() {
            if ($('.eight-block p').hasClass('unread')) {
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
          // $('.we-make-good-music')[0].load();
          $('.we-make-good-music').parents('.media-container').show();
          setTimeout(function() {
            if ($('.we-make-good-music').prev('img.thumbnail')[0].complete == true) {
              $('.we-make-good-music').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.we-make-good-music').bind('ended', function() {
            if ($('.ninth-block p').hasClass('unread')) {
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
          // $('.george-bush-explanation')[0].load();
          $('.george-bush-explanation').parents('.media-container').show();
          setTimeout(function() {
            if ($('.george-bush-explanation').prev('img.thumbnail')[0].complete == true) {
              $('.george-bush-explanation').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.george-bush-explanation').bind('ended', function() {
            if ($('.tenth-block p').hasClass('unread')) {
              setTimeout(function() {
                automatedText('.scroll-container .tenth-block p', 2000, [], 0, '-break-', 1000);
                tenth_block_interval = setInterval(theEnd, 10);
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
          // $('.macintosh-team')[0].load();
          $('.macintosh-team').parents('.media-container').show();
          setTimeout(function() {
            if ($('.macintosh-team').prev('img.thumbnail')[0].complete == true) {
              $('.macintosh-team').parents('.media-container').css('opacity', '1');
            }        
          }, 1000); 
        }, 1000); 
        $('.macintosh-team').bind('ended', function() {
            if ($('.eleventh-block p').hasClass('unread')) {
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
  var media_container,
      thumbnail,
      video,
      controls,
      post_link,
      paused,
      playing;
  
  if (desktop) {
    $(document).on('click', '.media-container.video', function(event) {
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
      }

      else if (playing) {
        video.pause(); 
        thumbnail.show();
        controls.show();
      }

      $(video).bind('ended', function() {
        thumbnail.show();
        controls.show();
      })
      event.stopPropagation();
    })
  }
  
  
  if (mobile) {
    if ($('p').hasClass('unread')) {
      $(document).on('touchstart', '.media-container.video', function(event) {
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
        }

        else if (playing) {
          video.pause(); 
          thumbnail.show();
          controls.show();
        }

        $(video).bind('ended', function() {
          thumbnail.show();
          controls.show();
        })
        event.stopPropagation();
      })
    }
  }
}




// AUTOMATED SCROLL READJUSTMENT
function automatedScrollAdjustment() {
  var parent_container_height = $('.parent-content-container').height();

  if ($('p').hasClass('unread')) {
    var margin_top = 0;
    var current_scroll_container_height = $('.scroll-container').height();

    if (current_scroll_container_height <= parent_container_height) {
      $('.scroll-container').css('margin-top', margin_top);
    } 

    if (current_scroll_container_height >= parent_container_height) {
      margin_top = -current_scroll_container_height - -parent_container_height;
      $('.scroll-container').css('margin-top', margin_top);
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
      if ($(this).find('.title').text() == $('.text-editor .title').text() || $('.poster').length == 1) {
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

 


// WINDOW ON LOAD
window.onload = function() {
  loader();
  userDeviceSpecifications();
  detectSizeChange();
  setInterval(function() {
    clock(); 
  }, 1000);
  textEditorBlur();
  closeTextEditor();
  searchTextEditor();
  sharePage();
  // setTimeout(function() {
    // automatedText('.scroll-container .first-block p', 2000, [''], 0, '-break-', 800);
  // }, 3500); 
  
  // automatedText('.scroll-container .sixth-block p', 2000, [''], 0, '-break-', 800);
  mediaAfterParagraphs();
  mediaPlayer();
  twitterEmbed();
  onFileClick();
}
