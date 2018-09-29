// GLOBAL VARIABLES
var body = $('body'),
    mac_os = $('.mac-os'),
    main_file = $('.main.file'),
    current_file,
    application = $('.application'),
    text_editor = $('.application.text-editor'),
    text_editor_title = "A ***** **** Analysis",
    uncompleted = !$('.scroll-container').hasClass('completed'),
    completed = $('.scroll-container').hasClass('completed'),
    video_player = $('.application.video-player'),
    image_preview = $('.application.image-preview'),
    image_preview_title = "Save Image Then Confirm",  
    world_clock = $('.application.world-clock'),
    world_clock_title = "World Clock",
    error_title = "An Error Has Occured",
    top_bar = $('.application > .header .top-bar'),
    title_scroll = $('.application > .header .title-scroll'),
    content_controls = $('.application > .header .content-controls'),
    parent_container = $('.application .parent-container'),
    scroll_container = $('.application .parent-container .scroll-container'),
    media_container,
    media_container_height,
    header,
    main_controls,
    blur,
    media,
    thumbnail,
    video,
    video_class,
    check_idle_state;




// NODES
var div = document.createElement('div'),
    button = document.createElement('button'),
    image = document.createElement('img'),
    paragraph = document.createElement('p'),
    span = document.createElement('span'),
    input = document.createElement('input'),
    link = document.createElement('a');
    link.target = '_blank';
    




// FIRST IMPRESSION 
function onFirstImpression() {
  if (firstImpression()) {
    console.log("New User");
    $('.loader').addClass('new-user');
    $('.loader .gta .skip-loader').remove();
  }
}

 


// DEVICE SPECIFICATIONS
function userDeviceSpecifications() {
  if (computer) {
    function draggableApp() {
      $('.application').draggable({
        handle: '.header',
        cursor: 'move', 
        drag: function(event, ui) {
          backgroundImageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
        }
      });
    } 
    draggableApp(); 

    if (firefox) {
      $('.menu-bar, .desktop').remove();
    }
  }
}


 

// DETECT SIZE CHANGE
function detectSizeChange() {    
  $('.mac-os, .application').mutate('width height top left', function(el, info) {
    if (computer) {
      repositionDraggable();
    }
    
    function deviceCurrentSize() {
      var previous_block;
      
      checkDeviceLength();
      
      if (device_width_longer) {
        body.removeClass('height-longer').addClass('width-longer');
        
        if ($('.application').hasClass('image-preview')) {
          titleOverflow('.application.image-preview .title', '.application.image-preview .title-scroll');
        } 
        
        if ($('.application').hasClass('world-clock')) {
          return;
        }
         
        function ifVideoPlayerInTextEditor() {
          var unwatched_video_present = $('.scroll-container .media-container.visible').length == 1;
          if (unwatched_video_present) {
            if ($('.application').hasClass('image-preview')) {
              return;
            } 
            
                previous_block = $('.scroll-container .media-container.visible').prev('.block');
                media_container = $('.scroll-container .media-container.visible');
                video = media_container.find('video');
            
            video.remove();
 
            setTimeout(function() {
              media_container_height = scroll_container.width() * 0.563278;
              media_container.removeClass('video-player').css('height', media_container_height);
              if ($('.application').hasClass('hide')) {
                $('.application').removeClass('hide');
                $('.background-credits').removeClass('show');
              }
              parent_container.append(media_container);
              application.removeClass('text-editor').addClass('video-player').css('height', media_container_height);       
              mac_os.addClass('dim');
              video_class = video.attr('class').replace(' hide', '');
              current_file = '.file.' + video_class;
              main_file.removeClass('show selected');
              $(current_file).addClass('show selected');
              
              $(window).on('resize', function() {
                media_container_height = scroll_container.width() * 0.563278;
                media_container.css('height', media_container_height);
                application.css('height', media_container_height);
              });
            }, 250);
          }
        }
        ifVideoPlayerInTextEditor();
      }  
      
      if (device_height_longer) {
        body.removeClass('width-longer').addClass('height-longer');

        if ($('.application').hasClass('image-preview')) {
          setTimeout(function() {
            titleOverflow('.application.image-preview .title', '.application.image-preview .title-scroll');
          }, 1000);
        } 

        if ($('.application').hasClass('video-player')) {
          $(window).off('resize');
          previous_block = $('.scroll-container p.read').last().parent('.block');
          media_container = $('.media-container.visible');

          applicationRemove();
          application.addClass('text-editor');
          applicationChange();
          previous_block.after(media_container);
        }
      }
    }
    deviceCurrentSize();
    
    backgroundImageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
    automatedScrollAdjustment();
  });
}




// LOADER
function loaderGTA() {
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
    if (ios) {
      $('.battery-adjustment').fadeIn(200);
    }  

    function leaveBrowser() {
      if (twitterInAppBrowser) {
        var native_browser,
            leave_twitter_text;

        function determineNativeBrowser() {

          if (ios) {
            native_browser = "Safari";
          }
          if (android) {
            native_browser = "Chrome";
          }
        }
        determineNativeBrowser();

        $('.open-in-different-browser').addClass(' twitter').fadeIn(200).html("<span class='info white icons-b abs'></span> Click the 'Extra Options' button <span class='extra-options icons-b abs'></span> in the top right corner and open in native browser.");
        $('.open-in-different-browser').html($('.open-in-different-browser').html().replace("native browser", native_browser));
      } 

      if (firefox && computer) {
        $('.open-in-different-browser').addClass(' firefox').fadeIn(200).html("<span class='info white icons-b abs'></span>Please use Chrome or Safari. Firefox has ugly scrollbars.");
        $('.menu-bar, .desktop').remove();
      } 
    }
    leaveBrowser();
  } 
  infoContainer();
  if (firefox && computer || twitterInAppBrowser) {
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
    setTimeout(function() {
      if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
        if (!twitterInAppBrowser) {
          $('.loader .gta .skip-loader').fadeIn(200);
        }
        $('.gta .michael.background-and-character-container').removeClass('show');
        $('.gta .text-logo.gta-5').text("");
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
          $('.gta .battery-adjustment').fadeOut(200);
        } 

        // callRemainderFunctions();
        // console.log("NOT SKIPPED ==  callRemainderFunctions();");
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
        $('.gta').removeClass('original');
        $('.gta .franklin-and-chop.background-and-character-container').remove();
        addMoveLoop();
      }
    }, 15750);

    // KANYE
    setTimeout(function() {
      if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
        $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis');
        $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
        $('.kanye.background-and-character-container').addClass('show');
      }
    }, 16150);
    setTimeout(function() {
      if ($('.loader').length == 1 && !$('.loader').hasClass('skipped')) {
        titleThenRemoveLoader();
        // console.log("Not Skipped"); 
      }
    }, 19500); 
  }
  transitions(); 

  function skipLoader() {
    $('.loader .gta .skip-loader').click(function() {
      $(this).removeClass('not-clicked');
      $('.loader').addClass('skipped');
      $('.gta .background-and-character-container').removeClass('show');
      $('.gta .skip-loader').fadeOut(200);
      if (ios) {
        $('.gta .battery-adjustment').fadeOut(200);
      }

      setTimeout(function() {
        $('.gta .skip-loader').remove();
      }, 200);

      setTimeout(function() {
        $('.gta .michael.background-and-character-container, .gta .trevor.background-and-character-container, .gta .franklin-and-chop.background-and-character-container').remove();
        $('.gta .background, .gta .character').removeClass('move');
      }, 1500);

      setTimeout(function() {
        $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis');
        $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
        $('.kanye.background-and-character-container').addClass('show');
      }, 1900); 

      setTimeout(function() { 
        titleThenRemoveLoader();
        // console.log("Skipped"); 
      }, 3300); 
    })
  } 
  skipLoader(); 

  function titleThenRemoveLoader() {
    $('.gta .text-logo').text("A Kanye West Analysis");
    automatedText('.gta .text-logo', 2000, [''], 0, '-break-', 800);

    var end_of_title_interval = setInterval(endOfTitle, 200);
    function endOfTitle() {
      if ($('.gta .text-logo').text().includes("A Kanye West Analysis")) {
        window.clearInterval(end_of_title_interval); 

        setTimeout(function() {
          callRemainderFunctions();
        }, 100);
        
        var remove_loader_interval;

        setTimeout(function() {
          remove_loader_interval = setInterval(removeLoader, 200);
        }, 1800); 

        function removeLoader() {
          if (typeof mediaAfterParagraphs === 'function') {
            // console.log("Loaded");
            window.clearInterval(remove_loader_interval);

            $('.loader').addClass('hide');

            setTimeout(function() {
              $('.loader').fadeOut(200);
            }, 2800);

            setTimeout(function() {
              $('.loader').remove();
            }, 2900);
          }
        }
      }
    }
  }
}




// APPLICATION REMOVE
function applicationRemove() { 
  function file() {
    main_file.removeClass('show selected');
  }
  file();
  
  function hiden() {
    if ($('.application').hasClass('hide')) {
      $('.application').removeClass('hide');
      $('.background-credits').removeClass('show');
    }
  }
  hiden();
  
  function title() {
    title_scroll.empty();
  }
  title();
   
  function contentControls() {
    $('.content-controls .social-platforms').empty();
    $('.content-controls button, .content-controls a').text('');
    content_controls.empty();
  }
  contentControls();
  
  function pauseAllVideos() {
    $('.media-container video').each(function() {
      var video = $(this).get(0);

      if (!video.paused) {
        video.pause(); 
      }
    });
  }
  pauseAllVideos();
  
  if ($('.application').hasClass('text-editor')) { 
    if ($('.content-controls').hasClass('search')) {
      $('.content-controls').removeClass('search');
    }
    
    if ($('.content-controls').hasClass('share')) {
      $('.content-controls .social-platforms').empty();
      $('.content-controls').removeClass('share');
    }
    
    application.removeClass('text-editor');
  }
  
  if ($('.application').hasClass('video-player')) {
    media_container.css('height', '');
    application.css('height', '');
    application.removeClass('video-player');
    mac_os.removeClass('dim');
  }

  if ($('.application').hasClass('image-preview')) {
    if ($('.image-preview > .header .title-scroll').hasClass('overflow')) {
      $('.image-preview > .header .title-scroll')[1].remove();
      $('.image-preview > .header .title-scroll').removeClass('overflow');
    }
    $('.image-preview > .header .content-controls .social-platforms').empty().remove(); 
    $('.image-preview .parent-container .poster').remove();
    application.removeClass('image-preview');
  }

  if ($('.application').hasClass('world-clock')) {
    $('.item.location-and-time-preferences').append($('.timezones'));
    application.removeClass('world-clock')
  }
}




// APPLICATION CHANGE
function applicationChange() {  
  if ($('.application').hasClass('text-editor')) { 
    $('.file.text').addClass('show selected');

    title_scroll.text(text_editor_title);

    function credits() {
      if ($('.scroll-container').hasClass('completed')) { 
        video = $('video.credits');
        media_container = video.parents('.media-container');

        if (media_container.hasClass('unwatched')) {
        button.className = 'credits';
        button.innerHTML = "Credits";
        $('.application > .header .content-controls').append(button.cloneNode(true));
        }
      }
    }
    credits();

    button.className = 'search white icons-b abs';
    $('.application > .header .content-controls').append(button.cloneNode());

    button.className = 'share white icons-b abs';
    $('.application > .header .content-controls').append(button.cloneNode());
    
    automatedScrollAdjustment();
  }

  if ($('.application').hasClass('video-player')) {
    return;
  }
  
  if ($('.application').hasClass('image-preview')) {
    $('.file.image-preview').addClass('show selected');

    title_scroll.text(image_preview_title);

    button.className = 'confirm'; 
    button.innerHTML = "Confirm";  
    $('.application > .header .content-controls').append(button.cloneNode(true));

    button.className = 'cancel';
    button.innerHTML = "Cancel";
    $('.application > .header .content-controls').append(button.cloneNode(true));

    image.className = 'poster';
    image.src = "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Portrait.jpg";
    parent_container.prepend(image);

    function actions() {
      $('.content-controls .confirm').click(function() {
        function windowLink() {
          var window_link = 'instagram://camera';
          if (mobile && android) {
            window_link = 'https://www.instagram.com/_u/acolorblue';
          }
          window.location.href = window_link;
        }
        windowLink();

        applicationRemove();
        application.addClass('text-editor');
        applicationChange();
      });

      $('.content-controls .cancel').click(function() {
        applicationRemove();
        application.addClass('text-editor');
        applicationChange();
      });
    }
    actions();

    setTimeout(function() {
      titleOverflow('.application.image-preview .title', 'application.image-preview .title-scroll');
    }, 1000);
  }

  if ($('.application').hasClass('world-clock')) {
    $('.file.world-clock').addClass('show selected');

    title_scroll.text(world_clock_title);

    link.className = 'sources';
    link.href = "https://github.com/acolorblue/worldclock/tree/master/Africa";
    link.innerHTML = "Sources";
    $('.application > .header .content-controls').append(link);

    button.className = 'exit';
    button.innerHTML = "Exit";
    $('.application > .header .content-controls').append(button);

    parent_container.prepend($('.timezones'));
    indicatorsContainer();

    function actions() {
      function imageZoom() {
        $('.computer .world-clock .timezones clock .numeric-indicators')
          .on('mouseover', function() {
          $(this).parents('clock').addClass('zoomed');
        })

          .on('mouseleave', function() {
          $(this).parents('clock').removeClass('zoomed');
        })
      }
      imageZoom();

      function exit() {
        $('.content-controls .exit').click(function() {
          window.clearInterval(indicators_interval);
          applicationRemove();
          application.addClass('text-editor');
          applicationChange();
          automatedScrollAdjustment();
        });
      }
      exit();
    }
    actions();
  }
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
        return;
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
            if (analog_clock || digital_clock) {
              if ($('.date-and-time .menu .item').hasClass('checked icons-b abs')) {
                $('.date-and-time .menu .item').removeClass('checked icons-b abs');
              }
              
              this_item.addClass('checked icons-b abs');
            }
            
            if (analog_clock) {
              title_button.removeClass('digital').addClass('analog');
            }

            if (digital_clock) {
              title_button.removeClass('analog').addClass('digital');
            }
          }
          analogOrDigital();
          
          function worldClock() {
            if (location_and_time_preferences) {
              if ($('.application').hasClass('video-player') || $('.application').hasClass('error')) {
                return;
              }
              
              applicationRemove();
              application.addClass('world-clock');
              applicationChange();
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
        return;
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
                twitter_timeline,
                timeline_height,
                heights_are_equal;
            
            function iframeHeight() {
              desktop_height = $('.mac-os .desktop').height();
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




// CLOSE APP
function closeApp() {
  $('.application .header .close').click(function() { 
    function pauseAnyVideosPlaying() {
      $('video').each(function() {
        var media_container = $(this).parents('.media-container'),
            video = $(this).get(0);
        if (!video.paused) {
          video.pause(); 
          media_container.find('.pause').removeClass('pause').addClass('play');
        }
      });
    }
    
    function desktopBackgroundCredits() {
      setTimeout(function() {
        $('.background-credits').addClass('show');
      }, 100);
    }
    
    if ($('.application').hasClass('error')) {
      return;
    }
    
    if ($('.application').hasClass('text-editor')) {
      pauseAnyVideosPlaying();
    }
    
    if ($('.application').hasClass('video-player')) {
      pauseAnyVideosPlaying();
      $('.mac-os').removeClass('dim');
    }  
    
    application.addClass('hide');
    main_file.removeClass('selected');
    desktopBackgroundCredits();
  })
}




// SEARCH TEXT EDITOR
function searchTextEditor() {
  $(document).on('click', '.text-editor > .header .content-controls .search', function() {
    uncompleted = $('p.unread').length > 0; 
    completed = $('.scroll-container').hasClass('completed');
    
    function searchBarShown() {
      if ($('.text-editor > .header .search-bar').length == 1) {
        $('.text-editor > .header .search-bar').val("").keyup().addClass('hide');
        $('.scroll-container p.read, .scroll-container .media-container.watched').removeClass('hide');
        setTimeout(function() {
          $('.text-editor > .header .search-bar').empty().remove(); 
          content_controls.removeClass('search');
        }, 200);  
      }
    }
    searchBarShown();
    
    function searchBarHidden() {
      if ($('.text-editor > .header .search-bar').length == 0) {
        if (uncompleted) {
          var return_text = "Can You Finish Reading First";
          
          title_scroll.text(return_text);
          setTimeout(function() {
            if (title_scroll.text() != return_text) {
              return;   
            } 

            title_scroll.text(text_editor_title);
          }, 2500);
        }

        if (completed) {
          input.className = 'search-bar hide';
          input.placeholder = "Search Essay";
          content_controls.prepend(input).addClass('search');
          setTimeout(function() {
            $('.text-editor > .header .search-bar').removeClass('hide');
          }, 200);
        }
      }
    }
    searchBarHidden();
 
    // SEARCH FUNCTION
    $('.text-editor > .header .search-bar').keyup(function() {
      var entered_value = $(this).val(),
          entered_value_global = new RegExp(entered_value, "ig"),
          no_value = entered_value == '';   

      $('.text-editor .scroll-container p.read').each(function() { 
        var paragraph_original = $(this).text();    
        var paragraph_highlight = paragraph_original.replace(entered_value_global, '<span class=\'highlight\'>' + entered_value + '</span>'); 

        if (!paragraph_original.includes(entered_value)) {
          $(this).addClass('hide');
        }

        if (paragraph_original.includes(entered_value)) {
          $(this).removeClass('hide');
        }
 
        if (no_value) {
          $('.text-editor .scroll-container p, .text-editor .scroll-container .media-container').removeClass('hide');
        }
      });
      
      $('.text-editor .media-container.watched').each(function() {
        if (entered_value.length > 0) {
          $(this).addClass('hide');
        }

        if (no_value) {
          $(this).removeClass('hide');
        }
      });
    })
  })
}




// SHARE PAGE
function sharePage() {
  $(document).on('click', '.text-editor > .header .content-controls .share', function() {

    function socialPlatformsShown() {
      if ($('.text-editor > .header .social-platforms').length == 1) {
        $('.text-editor > .header .social-platforms').addClass('hide');
        
        setTimeout(function() {
          $('.text-editor > .header .social-platforms').empty().remove(); 
          content_controls.removeClass('share');
        }, 200);
      }
    }
    socialPlatformsShown();
    
    function socialPlatformsHidden() {
      if ($('.text-editor > .header .social-platforms').length == 0) {
        button.className = 'twitter-b icons-b abs';
        div.append(button.cloneNode());

        button.className = 'instagram-b icons-b abs';
        div.append(button.cloneNode());

        button.className = 'tumblr-b icons-b abs';
        div.append(button.cloneNode());

        div.className = 'social-platforms hide';
        content_controls.prepend(div).addClass('share');
        setTimeout(function() {
          $('.social-platforms').removeClass('hide');
        }, 100);
      }
    }
    socialPlatformsHidden();

    // SOCIAL PLATFORMS
    $('.text-editor > .header .social-platforms button').click(function() {
      var poster_link = "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Portrait.jpg", 
          webpage = 'https://acolorblue.co/a-kanye-west-analysis',
          line_break = '%0A',
          window_link,
          caption = text_editor_title + ", by @acolorblue.",
          twitter = $(this).hasClass('twitter-b'),
          instagram = $(this).hasClass('instagram-b'),
          tumblr = $(this).hasClass('tumblr-b');

      if (twitter) {
        window_link = 'https://twitter.com/intent/tweet?source=webclient&text=' + caption + line_break + webpage;
        window.open(window_link);
      }

      if (instagram) {  
        applicationRemove();
        application.addClass('image-preview');
        applicationChange();
      }

      if (tumblr) {
        window_link = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + poster_link + '&caption=' + '<a href=\'' +  webpage + '\'>' + '<i>' + caption.slice(0, 21) + '</i></a>' + caption.slice(21);
        window.open(window_link);
      }

      socialPlatformsShown();
    })
  });
}


    
   
// MEDIA PRELOADS
function mediaPreloads() {
  function menuSections() {
    $('.panel .section-container').each(function() {
      $(this).addClass('selected');

      setTimeout(function() {
        $('.panel .section-container').removeClass('selected');
      }, 400);
    })
  }
  menuSections();
  
  function essayContent() {
    setTimeout(function() {
      $('video').each(function() {
        $(this).attr('preload', 'auto');
      });
    }, 500);
    
    setTimeout(function() {
      scroll_container.removeClass('preview');
    }, 900);
  }
  essayContent();
  
  function worldClock() {
    setTimeout(function() {
      applicationRemove();
      application.addClass('world-clock');
      applicationChange();
    }, 1000);
    
    setTimeout(function() {
      applicationRemove();
      application.addClass('text-editor');
      applicationChange();
    }, 1500);
  }
  worldClock();
}

  


// CALL AUTOMATED TEXT
function callAutomatedText() {
  var call_essay_interval = setInterval(callEssay, 200);
  function callEssay() {
    if ($('.loader').length == 0) {
      window.clearInterval(call_essay_interval);
      setTimeout(function() { 
//         automatedText('.scroll-container .first p', 2000, [''], 0, '-break-', 800);
          automatedText('.scroll-container .ninth p', 2000, [''], 0, '-break-', 800);
      }, 1800);
    }
  } 
}




// MEDIA AFTER PARAGRAPHS
function mediaAfterParagraphs() {
  var scroll_container_class,
      current_paragraph,
      unwatched,
      main_controls_buttons,
      video_content_controls, 
      play_pause,
      post_link,
      video,
      video_class,
      video_title, 
      video_link, 
      previous_block,
      next_block,
      next_block_class,
      next_block_number,
      next_paragraph, 
      next_block_paragraphs,
      next_block_paragraphs_class,
      next_block_interval,
      next_block_function,
      first_block_interval, 
      second_block_interval,
      third_block_interval,
      fourth_block_interval,
      fifth_block_interval,
      sixth_block_interval,
      seventh_block_interval,
      eighth_block_interval,
      ninth_block_interval,
      tenth_block_interval,
      eleventh_block_interval,
      ending_interval;
        
  function videoPlayer() {    
    function preparations() { 
      checkDeviceLength();
      if (device_width_longer) {
        applicationRemove();
        application.addClass('video-player');
      }
    }
    preparations(); 
    
    function build() { 
      scroll_container_class = '.' + scroll_container.attr('class');
      media_container = video.parents('.media-container'); 
      header = media_container.find('.header');
      media = media_container.find('.media');
      thumbnail = media_container.find('.thumbnail');
      main_controls = media_container.find('.main-controls');
      main_controls_buttons = main_controls.children('button');
      video_content_controls = media_container.find('.video.content-controls');
      play_pause = video_content_controls.find('.play-pause');
      post_link = video_content_controls.find('.post-link');
      blur = media_container.find('.blur');
      previous_block = media_container.prev('.block');
      next_block = media_container.next('.block');
      if (next_block.length == 1) {
        next_block_class = ' .' + next_block.attr('class').replace(' block', '');
        next_block_number = next_block_class.replace('.', '');
        next_block_paragraphs = next_block.find('p');
        next_block_paragraphs_class = ' .' + next_block_paragraphs.attr('class');
        next_block_paragraphs = scroll_container_class + next_block_class + next_block_paragraphs_class;
        next_paragraph = next_block.find('p:first-child');
      }
      
      
      function calcHeightWithScrollContWidthRatio(element) {
        var scroll_container_width = $('.scroll-container').width();
            media_container_height = scroll_container_width * 0.563278;
        
        $(element).css('height', media_container_height);
      }
      
      function controlsBackgroundColor() {
        thumbnail.primaryColor(function(color) {
          $(main_controls_buttons).css('background-color', 'rgb('+ color +', 0.7)');
          $(video_content_controls).css('background-color', 'rgb('+ color +', 0.7)');
        });
      }

      function blurAdjust() {
        $(media_container).mutate('width height', function(el, info) {
          backgroundImageBlur(thumbnail, video_content_controls, blur, 'image-tag');
        });
      }
      
      function videoLoader() {
        var loader = document.createElement('img');
            loader.className = 'video-loader ab-mid hide'; 
            loader.src = "https://raw.githubusercontent.com/acolorblue/acolorblue.github.io/gh-pages/Design%20Icons/Video%20Loader/1.gif";
        
        if ($('.video-loader').length == 0) {
          media.prepend(loader);
        }
        
        
//         var can_play_through_interval = setInterval(checkLoaded, 100);
//         function canPlayThrough() {
// //           var completeloaded = false;
// //           video.on('canplaythrough', function() {
// //             completeloaded = true;
// //           });

// //           console.log(completeloaded);

// //           if (completeloaded == true) {
// //             window.clearInterval(can_play_through_interval);
// //             console.log("Can play through video without stopping");
// //           }
          
          
          
//           var vid = document.getElementById("myVideo");
//           vid.oncanplaythrough = function() {
//             alert("Can play through video without stopping");
//           };
//         }
      }
      
      function fileChange() {
        video_class = video.attr('class').replace(' hide', '');
        current_file = '.file.' + video_class;
        main_file.removeClass('show selected');
        $(current_file).addClass('show selected');
      }
      
      function callNextBlock() {
        if (next_block.length == 1) {
          // console.log(next_block_number);

          if (next_block_number.includes('second')) {
            second_block_interval = setInterval(secondBlock, 250);
            // console.log("second_block_interval = setInterval(secondBlock, 250);");
          }

          if (next_block_number.includes('third')) {
            third_block_interval = setInterval(thirdBlock, 250);
            // console.log("third_block_interval = setInterval(thirdBlock, 250);");
          }

          if (next_block_number.includes('fourth')) {
            fourth_block_interval = setInterval(fourthBlock, 250);
            // console.log("fourth_block_interval = setInterval(fourthBlock, 250);");
          }

          if (next_block_number.includes('fifth')) {
            fifth_block_interval = setInterval(fifthBlock, 250);
            // console.log("fifth_block_interval = setInterval(fifthBlock, 250);");
          }

          if (next_block_number.includes('sixth')) {
            sixth_block_interval = setInterval(sixthBlock, 250);
            // console.log("sixth_block_interval = setInterval(sixthBlock, 250);");
          }

          if (next_block_number.includes('seventh')) {
            seventh_block_interval = setInterval(seventhBlock, 250);
            // console.log("seventh_block_interval = setInterval(seventhBlock, 250);");
          }

          if (next_block_number.includes('eighth')) {
            eighth_block_interval = setInterval(eighthBlock, 250);
            // console.log("eighth_block_interval = setInterval(eighthBlock, 250);");
          }

          if (next_block_number.includes('ninth')) {
            ninth_block_interval = setInterval(ninthBlock, 250);
            // console.log("ninth_block_interval = setInterval(ninthBlock, 250);");
          }

          if (next_block_number.includes('tenth')) {
            tenth_block_interval = setInterval(tenthBlock, 250);
            // console.log("tenth_block_interval = setInterval(tenthBlock, 250);");
          }

          if (next_block_number.includes('eleventh')) {
            ending_interval = setInterval(theEnd, 250);
            // console.log("ending_interval = setInterval(theEnd, 250);");
          }
        }
      }
      
      function arragements() {
        checkDeviceLength();
        if (device_width_longer) { 
          calcHeightWithScrollContWidthRatio(media_container);
          media_container.slideDown(500).addClass('visible');
          parent_container.append(media_container);
          
          setTimeout(function() {
            calcHeightWithScrollContWidthRatio(application); 
            calcHeightWithScrollContWidthRatio(media_container); 
            backgroundImageBlur(thumbnail, video_content_controls, blur, 'image-tag'); 
            blurAdjust(); 
            controlsBackgroundColor(); 
          }, 600);
           
          setTimeout(function() {
            videoLoader();
            mac_os.addClass('dim');
            fileChange();
            
            $(window).on('resize', function() {
              calcHeightWithScrollContWidthRatio(application);
              calcHeightWithScrollContWidthRatio(media_container);
            });
          }, 800);
        } 

        if (device_height_longer) { 
          media_container.fadeIn(200).addClass('video-player visible');
          backgroundImageBlur(thumbnail, video_content_controls, blur, 'image-tag');
          blurAdjust();
          controlsBackgroundColor();
          videoLoader();
        } 
        
        function videoEnded() {
          video.bind('ended', function() {
            unwatched = !media_container.hasClass('watched');
            
            header.removeClass('hide');
            play_pause.removeClass('pause').addClass('play');
            media_container.removeClass('playing uncompleted').addClass('covered');
            
            if (unwatched) {
              checkDeviceLength();
              if (device_width_longer) {
//                 setTimeout(function() {
//                   $(window).off('resize');
//                   main_controls.remove();
//                   media_container.removeClass('visible').css('height', '').addClass('watched covered video-player');
//                   application.removeClass('video-player').css('height', '').addClass('text-editor');
//                   previous_block.after(media_container);
//                   main_file.removeClass('show selected');
//                   $('.file.text').addClass('show selected');
//                 }, 1000);

//                 setTimeout(function() {
//                   mac_os.removeClass('dim');
//                 }, 1200);
                  
                  media_container.removeClass('visible').css('height', '').addClass('watched covered video-player');
                 applicationRemove();
                 application.addClass('text-editor');
                  applicationChange();
                  previous_block.after(media_container);
                  $(window).off('resize');

                setTimeout(function() {
                  automatedText(next_block_paragraphs, 2000, [], 0, '-break-', 1000);
                  callNextBlock();
                }, 2000);
              }

              if (device_height_longer) { 
                $(window).off('resize');
                media_container.removeClass('visible').addClass('watched covered');

                setTimeout(function() {
                  automatedText(next_block_paragraphs, 2000, [], 0, '-break-', 1000);
                  callNextBlock();
                }, 2000);
              }
            }
          })
        }
        videoEnded();
      }
      arragements();
    } 
    build(); 
  }
  
  function imageSlider(imageClass, imageLink, container, removalTimer) {
    var image_slide = document.createElement('img');
        image_slide.className = 'image-slide ab-mid';
     
    if ($('img.' + imageClass).length == 0 && $('.scroll-container').is(':visible')) {
      image_slide.className += ' ' + imageClass;
      image_slide.src = imageLink;
      $(container).append(image_slide);

      setTimeout(function() { 
        $('img.' + imageClass).addClass('show');
      }, 500);  
      
      setTimeout(function() { 
        $('img.' + imageClass).removeClass('show');
      }, removalTimer);
    }
  }
  
  
  // MALCOLM X POLICE VERDICT
  // first_block_interval = setInterval(firstBlock, 250);
  function firstBlock() {
    $('p.opened').last().each(function() {  
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("Damien Hirst, Steve Jobs & Malcolm X.")) {  
        imageSlider('into-to-wild', "https://static01.nyt.com/images/2018/07/01/arts/01interview/merlin_139917588_dc988cca-e04f-4594-a2f6-e14ea0c47244-superJumbo.jpg", '.scroll-container .first', 5000);
      }
      
      if (current_paragraph.includes("previously show his love for Malcolm X,")) {
        imageSlider('love-for-malcolm', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Video%20Thumbnails/5.%20Malcolm%20X%20On%20Martin%20Luther%20King/Malcolm%20X%20-%20Gordon%20Parks.jpg", '.scroll-container .first', 5000);
      }
      
      if (current_paragraph.includes("\“That’s too much power for one man to have.\”")) {
        window.clearInterval(first_block_interval);   

        setTimeout(function() { 
          video = $('video.malcolm-x-police-predict');
          video_title = "'Police Precinct' scene from Malcolm X (1992)";
          videoPlayer(); 
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
          video = $('video.kanye-to-cudi');
          video_title = "Kanye West respondes to Kid Cudi";
          videoPlayer(); 
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
          video = $('video.radio-fuck-you');
          video_title = "Kanye\'s Sacremento Rant from November 2016";
          videoPlayer();
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
          video = $('video.malcolm-x-on-goldwater');
          video_title = "Malcolm X On Barry Goldwater, 1964";
          videoPlayer();
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
          video = $('video.malcolm-x-on-mlk');
          video_title = "Malcolm X & Louis Lomax On Martin Luther King, 1963";
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // WIZ TWEETS & SLAVERY WAS A CHOICE
  function sixthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("TLOP because it was just too personal,")) {
        imageSlider('i-know-you-mad', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/3.%20Text%20Editor/Sliding%20Images/5.%20I%20Know%20You%20Mad%20Everytime%20You%20Look%20At%20Your%20Child.jpg", '.scroll-container .sixth', 7500);
        
        setTimeout(function() {
          imageSlider('you-own-waves', "https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/3.%20Text%20Editor/Sliding%20Images/13.%20I%20Own%20Your%20Child.jpg", '.scroll-container .sixth', 5000);
        }, 6000);
      }
      
      if (current_paragraph.includes("You was there for 400 years and it’s all of y’all??\”")) {
        window.clearInterval(sixth_block_interval);
        
        setTimeout(function() {
          video = $('video.slavery-was-a-choice');
          video_title = "Kanye on the choice of slavery";
          videoPlayer();
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
          video = $('video.candace-owens-economics');
          video_title = "Candace Owens on economics over social issues";
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // WE MAKE GOOD MUSIC
  function eighthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("about actual great art and quality of work,")) {
        window.clearInterval(eighth_block_interval);
          
        setTimeout(function() {
          video = $('video.we-make-good-music');
          video_title = "We Make Good Music";
          videoPlayer();
        }, 750);
      }
    })
  }
    
  ninth_block_interval = setInterval(ninthBlock, 250);
  
  
  // GEORGE BUSH EXPLANATION
  function ninthBlock() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("so wrong, my motivation was from a good place.\”")) {
        window.clearInterval(ninth_block_interval);
        
        setTimeout(function() {
          video = $('video.george-bush-explanation');
          video_title = "Kanye on the root of his motive";
          videoPlayer();
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
          video = $('video.macintosh-team');
          video_title = "On the creation of the MacIntosh, 1985";
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  
  // END OF ESSAY
  function theEnd() {
    $('p.opened').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("fight against the dehumanization of black men?")) {
        window.clearInterval(ending_interval);
        
        setTimeout(function() {
          function completed() {
            scroll_container.addClass('completed');
            scroll_container.css('margin-top', '');
          }
          completed();

          function mediaControlsAdjustments() {
            $('.media-container').each(function() {
              var media_container = $(this),
                  thumbnail = media_container.find('.thumbnail'),
                  content_controls = media_container.find('.video.content-controls'),
                  blur = media_container.find('.blur');

              backgroundImageBlur(thumbnail, content_controls, blur, 'image-tag');
            })
          }
          mediaControlsAdjustments();
        
          function credits() {
            function build() {
              button.className = 'credits';
              button.innerHTML = "Credits";
              $('.text-editor > .header .content-controls').prepend(button.cloneNode(true));
            }
            build();
            
            function actions() {
              $(document).on('click', '.text-editor > .header .content-controls .credits', function() { 
                media_container = $('video.credits').parents('.media-container');
                post_link = media_container.find('.post-link');
                unwatched = media_container.hasClass('unwatched') || !media_container.hasClass('watched');
                previous_block = media_container.prev('.block');
                
                function buildRotateToLandscape() {
                  if ($('.rotate-to-landscape').length == 0) {
                    div.className = 'rotate-to-landscape ab-mid';
                    body.prepend(div.cloneNode(true));

                    button.className = 'close grey ab-mid icons-b abs';
                    $('.rotate-to-landscape').append(button.cloneNode());

                    $('.rotate-to-landscape .close').click(function() {
                      media_container.removeClass('visible').hide();
                      build();
                      $('.rotate-to-landscape').remove();
                    })
                  }
                }
                
                if (mobile) {
                  $(window).on('orientationchange', function() {
                    // checkDeviceLength();
                    // if (device_height_longer) {
                    //   if (media_container.hasClass('visible')) {
                    //     buildRotateToLandscape();
                    //   }
                    // }
                    // build();
                  });
                }

                checkDeviceLength();
                if (device_height_longer) {
                  buildRotateToLandscape();
                }

                setTimeout(function() {
                  $('.text-editor > .header .credits').remove();
                  video = $('video.credits');
                  video_title = "Credits";
                  videoPlayer();
                  
                  function videoEnded() {
                    video.bind('ended', function() { 
                      $('.rotate-to-landscape').remove();
                    })
                  }
                  videoEnded();
                }, 750);
              });
            }
            actions();
          }
          credits();
        }, 3000);
      }
    })
  } 
}




// VIDEO PLAYER CONTROLS
function videoPlayback() {
  var covered,
      video,
      video_hidden,
      close,
      video_controls,
      this_button,
      play_pause,
      rewind,
      forward,
      time_adjustment, 
      loader,
      current_time,
      paused,
      playing,
      unwatched,
      clicked,
      watched;
  
  function variableAssignments() {
    media_container = this_button.closest('.media-container');
    covered = media_container.hasClass('covered');
    unwatched = media_container.hasClass('unwatched');
    clicked = !media_container.hasClass('unwatched');
    watched = media_container.hasClass('watched');
    header = media_container.find('.header');
    close = media_container.find('.close');
    video_controls = media_container.find('.content-controls');
    play_pause = media_container.find('.play-pause');
    rewind = media_container.find('.rewind');
    forward = media_container.find('.forward');  
    time_adjustment = rewind || forward;
    blur =  media_container.find('.blur');
    media = media_container.find('.media');
    loader = media_container.find('.video-loader');
    thumbnail = media_container.find('.thumbnail');
    video = media_container.find('video')[0];
    video_hidden = $(video).hasClass('hide');
    paused =  video.paused;
    playing = !video.paused;
    current_time = video.currentTime;
  }
  
  function checkIdleState() {
    var video_idle_state = false,
        first_video_position,
        second_video_position;
    
    function firstCheck() {
      first_video_position = video.currentTime;
      console.log('first_video_position = ' + first_video_position);
    }
    firstCheck();
    
    function secondCheck() {
      setTimeout(function() {
        second_video_position = video.currentTime;
        
        if (first_video_position != second_video_position) {
          video_idle_state = false;

          if (video_controls.hasClass('over')) {
            console.log("returned");
            return;
          }

          if (!video_controls.hasClass('over')) {
            header.addClass('hide');
          }
        }
        console.log(video_idle_state);
      }, 3000);

      setTimeout(function() {
        second_video_position = video.currentTime;
        
        if (first_video_position == second_video_position) {
          video_idle_state = true;
          
          header.removeClass('hide');

          if (loader.length == 1) {
            console.log("return");
            return;
          }
          
          media_container.removeClass('uncompleted').addClass('covered');
        }
        console.log(video_idle_state);
      }, 8000);
    }
    secondCheck();
  }
  
  function videoLoader() {
    loader.removeClass('hide');
    
    var remove_loader_interval = setInterval(removeLoader, 100);
    function removeLoader() {
      if (video.currentTime > 0) {
        window.clearInterval(remove_loader_interval);
        loader.remove();
      }
    }
    
    function videoPlaySafetyNet() {
      setTimeout(function() {
        if (video.currentTime == 0 && $('.video-loader').length == 1) {
          video.pause(); 
          media_container.find('.pause').removeClass('pause').addClass('play');

          setTimeout(function() {
            video.play();  
            media_container.addClass('playing uncompleted');
            media_container.find('.play').removeClass('play').addClass('pause');
          }, 1000);
        }
      }, 3000);
    }
    videoPlaySafetyNet();
  }
  
  function removeUnwatched() {
    media_container.removeClass('unwatched');
    header.removeClass('hide');
  }
  
  function playPause() {
    if (play_pause) {
      if (paused) {
        if (covered) {
          media_container.removeClass('covered');
        }
        
        if (unwatched) {
          videoLoader();
          removeUnwatched();
        } 

        video.play();  
        window.clearInterval(check_idle_state);
        media_container.addClass('playing uncompleted');
        media_container.find('.play').removeClass('play').addClass('pause');
        checkIdleState();
      }

      else if (playing) {
        video.pause(); 
        media_container.removeClass('playing');
        header.removeClass('hide');
        media_container.find('.pause').removeClass('pause').addClass('play');
        checkIdleState();
      }
    }
  }
  
  function timeAdjustment() {
    if (rewind) {
      video.currentTime = current_time - 4;
    }

    if (forward) {
      video.currentTime = current_time + 4;
    }
  }
  
  
  if (computer) {
    $(document)
      .on('click', '.media-container', function() {
      this_button = $(this);
      variableAssignments();
      
      play_pause.click();  
      })
    
      .on('click', '.media-container .close, .video.content-controls', function(event) {
        event.stopPropagation();
      }) 
    
      .on('mouseover', '.video.content-controls', function() {
      this_button = $(this);
      variableAssignments();

      if (unwatched) {
        // console.log("unwatched");
        return;
      }

      if (!video_controls.hasClass('over')) {
        video_controls.addClass('over');
      }
    })  
    
      .on('mouseout', '.video.content-controls', function() {
      this_button = $(this);
      variableAssignments();

      if (unwatched) {
        // console.log("unwatched");
        return;
      }

      video_controls.removeClass('over');
    })  
    
      .on('click', '.video.content-controls button', function(event) {
      this_button = $(this);
      variableAssignments();
      play_pause = this_button.hasClass('play-pause');
      rewind = this_button.hasClass('rewind');
      forward = this_button.hasClass('forward');

      playPause();
      timeAdjustment(); 
      event.stopPropagation();
      })
    
      .on('mouseover mousemove', '.media-container', function() {
      this_button = $(this);
      variableAssignments();
      
      if (unwatched) {
        // console.log("unwatched");
        return;
      }

      header.removeClass('hide');
    })
    
      .on('mouseleave', '.media-container', function() {
      this_button = $(this);
      variableAssignments();
      
      if (unwatched) {
        // console.log("unwatched");
        return;
      }
      
      if (!video_controls.hasClass('over')) {
        header.addClass('hide');
        console.log("'mouseleave', '.media-container'");
      }
    })
  }
  
  if (mobile) {
    $(document)
      .on('touchstart', '.media-container', function(event) {
      this_button = $(this);
      variableAssignments();

      if (unwatched) {
        // console.log("unwatched");
        return;
      }
      
      header.toggleClass('hide');
      event.stopPropagation();
      })
    
      .on('touchstart', '.media-container .close', function(event) {
        event.stopPropagation();
      })
    
      .on('touchstart', '.video.content-controls', function() {
        if (!video_controls.hasClass('over')) {
          video_controls.addClass('over');
        }
        // event.stopPropagation();
      }) 
    
      .on('touchend', '.video.content-controls', function() {
        setTimeout(function() {
          video_controls.removeClass('over');
        }, 2000);
      }) 
    
      .on('touchstart', '.video.content-controls button', function(event) {
      this_button = $(this);
      variableAssignments();
      play_pause = this_button.hasClass('play-pause');
      rewind = this_button.hasClass('rewind');
      forward = this_button.hasClass('forward');
      enableInlineVideo(video);
      
      if (!video_controls.hasClass('over')) {
        video_controls.addClass('over');
      }

      playPause();
      timeAdjustment();
      event.stopPropagation();
      })
  }
}


 
 
// FILE CLICK 
function onFileClick() {
  $('.file')  
    .mutate('top left', function(el, info) {
    setTimeout(function() {
      repositionDraggable();
    }, 1000);
  })
  
    .on('click', function() {
    var file = $(this),
        selected = $(this).hasClass('selected'),
        not_selected = !$(this).hasClass('selected'),
        main_file = $(this).hasClass('main'),
        text_editor = $('.application').hasClass('text-editor'),
        video_player = $('.application').hasClass('video-player'),
        world_clock = $('.application').hasClass('world-clock'),
        image_preview = $('.application').hasClass('image-preview');
    
    if (selected) {
      return;
    }

    if (not_selected) {
      if (main_file) {
        file.addClass('selected');
        application.removeClass('hide');
        $('.background-credits').removeClass('show');
        
        if (video_player) {
          $('.mac-os').addClass('dim');
        }
      }
    }
  })

    .on('contextmenu', function() {
    return false;
  })
  
    .draggable({
      cancel: false,
      cursor: 'move'
    });
}

  


// WINDOW ON LOAD
window.onload = function() {
  onFirstImpression();
  userDeviceSpecifications();
  userActiveStatus();
  detectSizeChange();
  loaderGTA();
  menuBar();
  closeApp();
  searchTextEditor(); 
  sharePage();
  videoPlayback(); 
  onFileClick();
  onWindowClick();
  
  // IF LOADER NOT PRESENT
//   callRemainderFunctions();
}

 


// CALL REMAINDER FUNCTIONS
function callRemainderFunctions() {
  clock();
  backgroundImageBlur('.mac-os', '.text-editor', '.text-editor > .blur', 'background-image');
  mediaPreloads();
  callAutomatedText();
  mediaAfterParagraphs();
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
  // alert("An error has occured, please throw your device away immediately. lol nah i'm fucking with you but tell me what happened though.");
  
  applicationRemove();
  application.addClass('error');

  function file() {
    $('.file.error').addClass('show selected');
  }
  file();

  function header() {
    title_scroll.text(error_title);

    button.className = 'send-email';
    button.innerHTML = "Send Email";
    $('.application > .header .content-controls').append(button);
  }
  header();

  function body() {
    // SECTION - CODE      
    div.className = 'section code';
    parent_container.append(div.cloneNode(true));

    paragraph.className = 'title';
    paragraph.innerHTML = "Code";
    $('div.section.code').append(paragraph.cloneNode(true));

    paragraph.className = 'content';
    paragraph.innerHTML = "<span>" + msg + ".</span> " +
      "<span>Line Number: " + linenumber + ".</span> ";
    $('div.section.code').append(paragraph.cloneNode(true));


    // SECTION - USER-EXPERIENCE
    div.className = 'section user-experience';
    parent_container.append(div.cloneNode());

    paragraph.className = 'title';
    paragraph.innerHTML = "User Experience";
    $('div.section.user-experience').append(paragraph.cloneNode(true));

    paragraph.className = 'content empty';
    paragraph.contentEditable = true;
    $('div.section.user-experience').append(paragraph.cloneNode());
  }
  body();

  function actions() {
    $('.content-controls .send-email').click(function() {
      var email_address = 'mailto:info@acolorblue.co',
          subject = "?subject=Error on " + url,
          body = "&body=" + 
          "CODE ERROR: " + "%0A" + 
          $('.error .code .content').text().replace(". ", ". %0A") + "%0A %0A" + 
          "USER EXPERIENCE: " + "%0A" + 
          $('.error .user-experience .content').text();

      window.location.href = email_address + subject + body;
      setTimeout(function() {
        location.reload();
      }, 2000);
    });

    $('.error .user-experience .content').keyup(function() {
      if ($(this).length > 0) {
        $(this).removeClass('empty');
      }

      if ($(this).text() == "") {
        $(this).addClass('empty');
      }
    })
  }
  actions();
}
