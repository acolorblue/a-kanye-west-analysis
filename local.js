// GLOBAL VARIABLES
var mac_os = $('.mac-os'),
    main_file = $('.file.main'),
    current_file,
    application = $('.application'),
    text_editor = $('.application.text-editor'),
    video_player = $('.application.video-player'),
    image_preview = $('.application.image-preview'),
    world_clock = $('.application.world-clock'),
    error,
    header,
    window_controls,
    close,
    text_editor_title = "A ***** **** Analysis",
    image_preview_title = "Save Image Then Confirm",  
    world_clock_title = "World Clock",
    error_title = "An Error Has Occured",
    top_bar = $('.application > .header .top-bar'),
    top_bar_children,
    title_scroll = $('.application > .header .title-scroll'),
    content_controls,
    parent_container = $('.application .parent-container'),
    scroll_container = $('.application .parent-container .scroll-container'),
    scroll_container_class = '.scroll-container',
    uncompleted = !$('.scroll-container').hasClass('completed'),
    completed = $('.scroll-container').hasClass('completed'),
    media,
    media_class,
    media_height,
    covered,
    unwatched,
    clicked,
    watched,
    buffering_indicator,
    blur,
    rewind,
    play_pause,
    forward,
    time_adjustments,
    content,
    thumbnail,
    video,
    video_class,
    source,
    hidden,
    media_current_time_mark,
    paused,
    playing,
    previous_block,
    next_block,
    selected_exists;

   


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
          imageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
        }
      });
    } 
    draggableApp(); 
    
    if (macintosh) {
      if (firefox) {
        
      }
    }
    
    if (windows) {
      if (firefox) {
        $('.menu-bar, .desktop').remove();
      }
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
      checkDeviceLength();
      if (device_width_longer) {
        html.removeClass('height-longer').addClass('width-longer');
        
        if ($('.application').hasClass('image-preview')) {
          titleOverflow('.application.image-preview .title', '.application.image-preview .title-scroll');
          return;
        } 
        
        if ($('.application').hasClass('world-clock')) {
          return;
        }
        
        if ($('.application').hasClass('text-editor')) {
          var unwatched_video_present = $('.parent-container .media.visible').length == 1;
          if (unwatched_video_present) {
            applicationRemove();
            application.addClass('video-player');
            applicationChange();
          }
        }
      }  
      
      if (device_height_longer) {
        html.removeClass('width-longer').addClass('height-longer');

        if ($('.application').hasClass('image-preview')) {
          setTimeout(function() {
            titleOverflow('.application.image-preview .title', '.application.image-preview .title-scroll');
            return;
          }, 1000);
        } 

        if ($('.application').hasClass('video-player')) {
          $(window).off('resize');
          media = $('.parent-container .media.visible');
          video = media.find('video');
          mediaVariableAssignments();

          applicationRemove();
          application.addClass('text-editor');
          applicationChange();
          previous_block.after(media);
        }
      }
    }
    deviceCurrentSize();
    
    imageBlur('.mac-os', '.mac-os > .menu-bar', '.mac-os > .menu-bar > .blur-container .blur', 'background-image');
    imageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
    automatedScrollAdjustment();
  });
}




// LOADER
function loaderGTA() {
  function removeInitialCover() {
    setTimeout(function() {
      $('.loader').addClass('uncovered');
    }, 2000);

    setTimeout(function() {
      $('.loader').removeClass('covered uncovered');
    }, 3000);
  }
  removeInitialCover();

  function infoContainer() {
    if (mobile) {
      if (ios) {
        native_browser = "Safari";
        
        $('.battery-adjustment').fadeIn(200);
      } 
      
      if (android) {
        native_browser = "Chrome or Firefox";
      }

      if (twitter_in_app) {
        $('.open-in-different-browser').addClass('twitter').fadeIn(200).html("<span class='info white icons-b abs'></span> Click the 'Extra Options' button <span class='extra-options icons-b abs'></span> in the top right corner and open in native browser.");
        $('.open-in-different-browser').html($('.open-in-different-browser').html().replace("native browser", native_browser));
      } 
    }

    if (computer) {
      if (windows) {
        if (firefox) {
          $('.open-in-different-browser').addClass('firefox').fadeIn(200).html("<span class='info white icons-b abs'></span>Please use Chrome or Safari. Firefox on Windows has ugly scrollbars.");
          $('.menu-bar, .desktop').remove();
        }
      }
    } 
  } 
  infoContainer();
  if (computer && windows && firefox || twitter_in_app) {
    $('.animations-container.michael').addClass('show');
    addMoveLoop();
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
    var loader_hasnt_been_skipped = $('.loader').length == 1 && !$('.loader').hasClass('skipped');
    
    // MICHAEL
    $('.gta .animations-container.michael').addClass('show');
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        if (!twitter_in_app) {
          $('.loader .gta .skip-loader').fadeIn(200);
        }
        $('.gta .animations-container.michael').removeClass('show');
        $('.gta .text-logo.gta-5').text("");
      }
    }, 4150); 
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.michael').remove();
        addMoveLoop(); 
      }
    }, 5650);

    // TREVOR
    setTimeout(function() { 
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.trevor').addClass('show');
      }
    }, 6050);
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.trevor').removeClass('show');
      }
    }, 9200);
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.trevor').remove();
        addMoveLoop();
        if (!twitter_in_app) {
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
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.franklin-and-chop').addClass('show');
      }
    }, 11100);
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.franklin-and-chop').removeClass('show'); 
      }
    }, 14250);
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta').removeClass('original');
        $('.gta .animations-container.franklin-and-chop').remove();
        addMoveLoop();
      }
    }, 15750);

    // KANYE
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis unread');
        $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
        $('.animations-container.kanye').addClass('show');
      }
    }, 16150);
    setTimeout(function() {
      if (loader_hasnt_been_skipped) {
        titleThenRemoveLoader();
        // console.log("Not Skipped"); 
      }
    }, 19500);
  }

  function skipLoader() {
    $('.loader .gta .skip-loader').click(function() {
      $(this).removeClass('not-clicked');
      $('.loader').addClass('skipped');
      $('.gta .animations-container').removeClass('show');
      $('.gta .skip-loader').fadeOut(200);
      if (ios) {
        $('.gta .battery-adjustment').fadeOut(200);
      }

      setTimeout(function() {
        $('.gta .skip-loader').remove();
      }, 200);

      setTimeout(function() {
        $('.gta .animations-container.michael, .gta .animations-container.trevor, .gta .animations-container.franklin-and-chop').remove();
        $('.gta .background, .gta .character').removeClass('move');
      }, 1500);

      setTimeout(function() {
        $('.gta .text-logo').removeClass('gta-5').addClass('kanye-analysis');
        $('.gta .icon-logo').removeClass('rockstar').addClass('good-music');
        $('.animations-container.kanye').addClass('show');
      }, 1900); 

      setTimeout(function() { 
        titleThenRemoveLoader();
        // console.log("Skipped"); 
      }, 3300); 
    })
  } 

  function titleThenRemoveLoader() {
    $('.gta .text-logo').text("A Kanye West Analysis");
    automatedText('.gta .text-logo', 2000, [''], 0, '-break-', 800);

    var end_of_title_interval = setInterval(endOfTitle, 200),
        remove_loader_interval;
    function endOfTitle() {
      if ($('.gta .text-logo').text().includes("A Kanye West Analysis")) {
        window.clearInterval(end_of_title_interval); 

        setTimeout(function() {
          callRemainderFunctions();
        }, 100);
        
        setTimeout(function() {
          remove_loader_interval = setInterval(removeLoader, 200);
        }, 3400); 
        function removeLoader() {
          if (typeof mediaAfterParagraphs === 'function') {
            window.clearInterval(remove_loader_interval);

            $('.loader').addClass('hide');
            setTimeout(function() {
              $('.loader').remove();
            }, 2990);
          }
        }
      }
    }
  }
  
  setTimeout(function() {
    transitions(); 
    addMoveLoop();
    skipLoader(); 
  }, 3000);
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
    $('.application > .header .content-controls').empty();
  }
  contentControls();
  
  if ($('.application').hasClass('error')) {
    return;
  }
  
  if ($('.application').hasClass('text-editor')) { 
    pauseAnyVideosPlaying('.application');
    
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
    pauseAnyVideosPlaying('.application');
    thumbnail.css('height', '');
    media.css('height', '');
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




// MEDIA VARIABLE ADJUSTMENTS
function mediaVariableAssignments() {
  covered = media.hasClass('covered');
  unwatched = media.hasClass('unwatched');
  clicked = !media.hasClass('unwatched');
  watched = media.hasClass('watched');
  header = media.find('.header');
  top_bar = media.find('.top-bar');
  top_bar_children = top_bar.children('div');
  window_controls = media.find('.window-controls');
  close = media.find('.close');
  content_controls = media.find('.content-controls');
  blur = media.find('.blur');
  rewind = media.find('.rewind');
  play_pause = media.find('.play-pause');
  forward = media.find('.forward');  
  time_adjustments = rewind || forward;
  content = media.find('.content');
  buffering_indicator = media.find('.buffering-indicator');
  thumbnail = media.find('.thumbnail');
  hidden = $(video).hasClass('hide');
  paused =  video.paused;
  playing = !video.paused;
  media_current_time_mark = video.currentTime;
  previous_block = $('p.read').last().parents('.block');
  next_block = $('p.unread').first().parents('.block');
}




// APPLICATION CHANGE
function applicationChange() {
  if ($('.application').hasClass('text-editor')) { 
    $('.file.text').addClass('show selected');

    title_scroll.text(text_editor_title);

    function credits() {
      if ($('.scroll-container').hasClass('completed')) { 
        media = $('.media.credits');

        if (!media.hasClass('watched')) {
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
    media = $('.parent-container .media.visible');
    video = media.find('video');
    mediaVariableAssignments();
    
    media.removeClass('video-player');
    parent_container.append(media);
    heightFromWidthRatio(media, '.scroll-container', '0.563278');
    setTimeout(function() {
      heightFromWidthRatio(application, '.scroll-container', '0.563278');
      primaryColor(thumbnail, top_bar_children, '0.7');
    }, 600);
    setTimeout(function() {
      function fileChange() {
        classRetriever(media, '0');
        current_file = '.file.' + class_retrieved;
        $(current_file).addClass('show selected');
      }
      fileChange();
      mac_os.addClass('dim');
      imageBlur(thumbnail, content_controls, blur, 'image-tag'); 
      imageBlurReposition(thumbnail, content_controls, blur, 'image-tag');
      $(window).on('resize', function() {
        heightFromWidthRatio(application, '.scroll-container', '0.563278');
        heightFromWidthRatio(media, '.scroll-container', '0.563278');
      });
    }, 800);
    setTimeout(function() {
      heightFromWidthRatio(application, '.scroll-container', '0.563278');
      heightFromWidthRatio(media, '.scroll-container', '0.563278');
      heightFromWidthRatio(thumbnail, '.scroll-container', '0.563278');
    }, 1100);
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
        this_button = $(this),
        menu = $(this).next('.menu'),
        this_is_selected = section_container.hasClass('selected'),
        this_is_not_selected = !this_is_selected,
        selected_exists = $('.menu-bar .section-container.selected').length == 1,
        apple_menu = this_button.hasClass('apple-logo'),
        date_and_time = this_button.hasClass('time'),
        profile = this_button.hasClass('name'),
        notification_center = this_button.hasClass('notification-center');
    
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
        var desktop_height,
            twitter_timeline,
            embed_doesnt_exist = $('iframe.twitter-timeline').length == 0,
            height_placement_interval,
            heights_are_equal;
            
        
        function scriptLink() {
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
        
        function heightPlacement() {
          desktop_height = $('.mac-os .desktop').height();
          twitter_timeline = $('iframe.twitter-timeline');
          
          menu.css('height', desktop_height);
          twitter_timeline.css('height', desktop_height);
         // console.log(twitter_timeline.height());
        }
        
        function updateOnResize() {
          $(window).on('resize', function() {
           // console.log("resized");
            heightPlacement();
          });
        }
        
        function removeCover() {
          setTimeout(function() {
            window.clearInterval(height_placement_interval);
            menu.removeClass('cover twitter icons-b abs');
            $(window).trigger('resize');
          }, 3000);
          
          setTimeout(function() {
            // $(window).trigger('resize');
            heightPlacement();
          }, 4000);
          
          setTimeout(function() {
            // $(window).trigger('resize');
            heightPlacement();
          }, 5000);
        }

        if (embed_doesnt_exist) {
          scriptLink();
          height_placement_interval = setInterval(heightPlacement, 1);
          updateOnResize();
          removeCover();
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
    pauseAnyVideosPlaying('.application');
    
    function desktopBackgroundCredits() {
      setTimeout(function() {
        $('.mac-os .background-credits').addClass('show');
      }, 100);
      
      $('.mac-os .background-credits').mutate('right', function(el, info) {
        imageBlur('.mac-os', '.mac-os .background-credits', '.mac-os .background-credits .blur', 'background-image');
      })
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
    imageBlur('.mac-os', '.mac-os .background-credits', '.mac-os .background-credits .blur', 'background-image');
  })
}




// SEARCH TEXT EDITOR
function searchTextEditor() {
  $(document).on('click', '.text-editor > .header .content-controls .search', function() {
    uncompleted = !$('.scroll-container').hasClass('completed');
    completed = $('.scroll-container').hasClass('completed');
    
    function searchBarShown() {
      if ($('.text-editor > .header .search-bar').length == 1) {
        $('.text-editor > .header .search-bar').val("").keyup().addClass('hide');
        $('.text-editor .scroll-container p.read, .text-editor .scroll-container .media.watched').removeClass('hide');
        setTimeout(function() {
          $('.text-editor > .header .search-bar').empty().remove(); 
          $('.text-editor > .header .content-controls').removeClass('search');
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
          $('.application > .header .content-controls').prepend(input).addClass('search');
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

        if (!paragraph_original.includes(entered_value)) {
          $(this).addClass('hide');
        }

        if (paragraph_original.includes(entered_value)) {
          $(this).removeClass('hide');
        }
 
        if (no_value) {
          $('.text-editor .scroll-container p, .text-editor .scroll-container .media.watched').removeClass('hide');
        }
      });
      
      $('.text-editor .media.watched').each(function() {
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
          $('.application > .header .content-controls').removeClass('share');
        }, 200);
      }
    }
    socialPlatformsShown();
    
    function socialPlatformsHidden() {
      if ($('.text-editor > .header .social-platforms').length == 0) {
        button.className = 'twitter icons-b abs';
        div.append(button.cloneNode());

        if (mobile) {
          button.className = 'instagram icons-b abs';
          div.append(button.cloneNode());
        }

        button.className = 'tumblr icons-b abs';
        div.append(button.cloneNode());

        div.className = 'social-platforms hide';
        $('.application > .header .content-controls').prepend(div).addClass('share');
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
          twitter = $(this).hasClass('twitter'),
          instagram = $(this).hasClass('instagram'),
          tumblr = $(this).hasClass('tumblr');

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
  setTimeout(function() {
    $('.panel .section-container').removeClass('selected');
  }, 200);
  
  setTimeout(function() {
    $('video').attr('preload', 'auto');
  }, 300);
  
  setTimeout(function() {
    $('.scroll-container .media').addClass('hide');
  }, 400);

  setTimeout(function() {
    applicationRemove();
    application.addClass('world-clock');
    applicationChange();
  }, 600);

  setTimeout(function() {
    applicationRemove();
    application.addClass('text-editor');
    applicationChange();
  }, 1200);
}

  


// CALL AUTOMATED TEXT
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




// MEDIA AFTER PARAGRAPHS
function mediaAfterParagraphs() {
  var current_paragraph,
      next_block_class,
      next_block_number,
      next_paragraph,
      next_block_paragraphs,
      next_block_paragraphs_class,
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
      eleventh_block_interval;
        
  function videoPlayer() {
    media = $('.parent-container .media.visible');
    video = media.find('video');
    mediaVariableAssignments();
    if (next_block.length == 1) {
      next_block_class = ' .' + next_block.attr('class').replace(' block', '');
      next_block_number = next_block_class.replace('.', '');
      next_block_paragraphs = next_block.find('p');
      next_block_paragraphs_class = ' .' + next_block_paragraphs.attr('class');
      next_block_paragraphs = scroll_container_class + next_block_class + next_block_paragraphs_class;
      next_paragraph = next_block.find('p:first-child');
    }

    function callNextBlock() {
      if (next_block.length == 1) {
        if (next_block_number.includes('second')) {
          second_block_interval = setInterval(secondBlock, 250);
        }

        if (next_block_number.includes('third')) {
          third_block_interval = setInterval(thirdBlock, 250);
        }

        if (next_block_number.includes('fourth')) {
          fourth_block_interval = setInterval(fourthBlock, 250);
        }

        if (next_block_number.includes('fifth')) {
          fifth_block_interval = setInterval(fifthBlock, 250);
        }

        if (next_block_number.includes('sixth')) {
          sixth_block_interval = setInterval(sixthBlock, 250);
        }

        if (next_block_number.includes('seventh')) {
          seventh_block_interval = setInterval(seventhBlock, 250);
        }

        if (next_block_number.includes('eighth')) {
          eighth_block_interval = setInterval(eighthBlock, 250);
        }

        if (next_block_number.includes('ninth')) {
          ninth_block_interval = setInterval(ninthBlock, 250);
        }

        if (next_block_number.includes('tenth')) {
          tenth_block_interval = setInterval(tenthBlock, 250);
        }

        if (next_block_number.includes('eleventh')) {
          eleventh_block_interval = setInterval(eleventhBlock, 250);
        }
      }
    }

    function arragements() {
      checkDeviceLength();
      if (device_width_longer) {
        media.slideDown(500);
        applicationRemove();
        application.addClass('video-player');
        applicationChange();
      }

      if (device_height_longer) {
        media.fadeIn(200);
        imageBlur(thumbnail, content_controls, blur, 'image-tag'); 
        imageBlurReposition(thumbnail, content_controls, blur, 'image-tag'); 
        primaryColor(thumbnail, top_bar_children, '0.7');
      } 

      media.removeClass('hide');
      
      function videoEnded() {
        video.on('ended', function() {
          play_pause = media.find('.play-pause');
          play_pause.removeClass('pause').addClass('play');
          header.addClass('hide');
          media.removeClass('playing uncompleted').addClass('covered');
          
          unwatched = !media.hasClass('watched');
          if (unwatched) {
            buffering_indicator.remove();
            media.removeClass('visible').css('display', '').addClass('watched');
            $(window).off('resize');
            
            checkDeviceLength();
            if (device_width_longer) {
              setTimeout(function() {
                applicationRemove();
                application.addClass('text-editor');
                applicationChange();
                window_controls.remove();
                media.addClass('video-player');
                previous_block.after(media);
              }, 1000);
            }

            if (device_height_longer) { 
            }
            
            if (media.hasClass('credits')) {
              $('.text-editor > .header .credits').remove();
              $('body .rotate-to-landscape').remove();
              return;
            }

            setTimeout(function() {
              automatedText(next_block_paragraphs, 2000, [], 0, '-break-', 1000);
              callNextBlock();
            }, 2000);
          }
        })
      }
      videoEnded();
    }
    arragements();
  }
  
  
  // POLICE PRECINCT SCENE FROM 'MALCOLM X' (1992)
  first_block_interval = setInterval(firstBlock, 250);
  function firstBlock() {
    $('p.reading, p.read').last().each(function() {  
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
          $('.media.malcolm-x-police-precinct').addClass('visible');
          videoPlayer(); 
        }, 750);
      }
    })
  }
  
  
  // KANYE RESPONDS TO CUDI
  function secondBlock() {
    $('p.reading, p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("I\’m out here fighting for y’all!!\”")) {
        window.clearInterval(second_block_interval);

        setTimeout(function() { 
          $('.media.kanye-responds-to-cudi').addClass('visible');
          videoPlayer(); 
        }, 750);
      }
    })
  } 
  
  
  // RADIO FUCK YOU
  function thirdBlock() {
    $('p.reading, p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("Imma take his lead! Radio fuck you!!!\”")) {
        window.clearInterval(third_block_interval);

        setTimeout(function() {
          $('.media.radio-fuck-you').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // MALCOLM X ON GOLDWATER
  function fourthBlock() {
    $('.scroll-container .fourth p.reading, .scroll-container .fourth p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("getting the support of the negro.\”")) {
        window.clearInterval(fourth_block_interval);
        
        setTimeout(function() {
          $('.media.malcolm-x-on-goldwater').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
   
  // MALCOLM X ON MARTIN LUTHER KING JR
  function fifthBlock() {
    $('.scroll-container .fifth p.reading, .scroll-container .fifth p.read').last().each(function() { 
      current_paragraph = $(this).text();
         
      if (current_paragraph.includes("Martin Luther King received from Malcolm X.")) {
        window.clearInterval(fifth_block_interval);
        
        setTimeout(function() {
          $('.media.malcolm-x-on-mlk').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // KANYE ON THE CHOICE OF SLAVERY
  function sixthBlock() {
    $('.scroll-container .sixth p.reading, .scroll-container .sixth p.read').last().each(function() {
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
          $('.media.slavery-was-a-choice').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // CANDACE OWENS ON ECONOMICS OVER SOCIAL ISSUES
  function seventhBlock() {
    $('.scroll-container .seventh p.reading, .scroll-container .seventh p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("third world country while screaming about pronouns\”")) {
        window.clearInterval(seventh_block_interval);
        
        setTimeout(function() {
          $('.media.candace-owens-economics').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // WE MAKE GOOD MUSIC
  function eighthBlock() {
    $('.scroll-container .eighth p.reading, .scroll-container .eighth p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("about actual great art and quality of work,")) {
        window.clearInterval(eighth_block_interval);
          
        setTimeout(function() {
          $('.media.we-make-good-music').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // KANYE ON THE GEORGE BUSH INCIDENT
  function ninthBlock() {
    $('.scroll-container .ninth p.reading, .scroll-container .ninth p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("so wrong, my motivation was from a good place.\”")) {
        window.clearInterval(ninth_block_interval);
        
        setTimeout(function() {
          $('.media.george-bush-explanation').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // BUILDING THE MACINTOSH, 1985
  function tenthBlock() {
    $('.scroll-container .tenth p.reading, .scroll-container .tenth p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("just show them clearly where they are going.")) {
        window.clearInterval(tenth_block_interval);
       
        setTimeout(function() {
          $('.media.building-the-macintosh').addClass('visible');
          videoPlayer();
        }, 750);
      }
    })
  }
  
  
  // END OF ESSAY + CREDITS
  function eleventhBlock() {
    $('.scroll-container .eleventh p.reading, .scroll-container .eleventh p.read').last().each(function() {
      current_paragraph = $(this).text();
      
      if (current_paragraph.includes("fight against the dehumanization of black men?")) {
        window.clearInterval(eleventh_block_interval);
        
        setTimeout(function() {
          function completed() {
            scroll_container.css('transition', 'margin-top 1s ease-in-out');
            scroll_container.css('margin-top', '').addClass('completed');

            setTimeout(function() {
              scroll_container.css('transition', '');
            }, 1000);
          }
          completed();

          function credits() {
            function build() {
              button.className = 'credits';
              button.innerHTML = "Credits";
              $('.text-editor > .header .content-controls').prepend(button.cloneNode(true));
            }
            build();
            
            function actions() {
              $(document).on('click', '.text-editor > .header .content-controls .credits', function() { 
                $('.media.credits').addClass('visible');
                videoPlayer();

                if (mobile) {
                  rotateToLandscape();
                  button.className = 'close grey ab-mid icons-b abs';
                  $('body .rotate-to-landscape').append(button.cloneNode());
                  $('.rotate-to-landscape .close').click(function() {
                    $('.media.credits').removeClass('visible').css('display', '').addClass('hide');
                    $('body .rotate-to-landscape').remove();
                  })
                }
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
  function callVariables() {
    media = this_button.closest('.media');
    video = media.find('video')[0];
    mediaVariableAssignments();
  }
  
  function playPause() {
    if (play_pause) {
      if (paused) {
        if (covered) {
          media.removeClass('covered');
        }
        
        if (unwatched) {
          bufferingActions();
          removeUnwatched();
        } 

        video.play();  
        media.addClass('playing uncompleted');
        play_pause = media.find('.play-pause');
        play_pause.removeClass('play').addClass('pause');
        checkIdleState();
      }

      else if (playing) {
        video.pause(); 
        media.removeClass('playing');
        header.removeClass('hide');
        play_pause = media.find('.play-pause');
        play_pause.removeClass('pause').addClass('play');
        checkIdleState();
      }
    }
  }
  
  function removeUnwatched() {
    media.removeClass('unwatched');
    header.removeClass('hide');
  }
  
  function bufferingActions() {
    function reload() {
      alert("An issue occured with the video so it is being reloaded.");
      video.load();
      play_pause = media.find('.play-pause');
      play_pause.removeClass('pause').addClass('play');
    }
    
    $(video).on('error', function() {
      // console.log("Error! Something went wrong");
      reload();
    });
    
    $(video).on('waiting', function() {
      // console.log("Wait! I need to buffer the next frame");
      buffering_indicator.addClass('show');
    });
    
    $(video).on('suspend', function() {
      // console.log("Loading of the media is suspended");
    });
    
    $(video).on('stalled', function() {
      // console.log("Media data is not available");
      reload();
    });
    
    $(video).on('playing', function() {
     // console.log("The video is now playing");
      buffering_indicator.removeClass('show');
    });
    
    function safetyNet() {
      setTimeout(function() {
        if (video.currentTime == 0 && buffering_indicator.hasClass('show')) {
          video.pause(); 
          play_pause = media.find('.play-pause');
          play_pause.removeClass('pause').addClass('play');

          setTimeout(function() {
            video.play();  
            media.addClass('playing uncompleted');
            play_pause = media.find('.play-pause');
            play_pause.removeClass('play').addClass('pause');
          }, 1000);
        }
      }, 3000);
    }
    safetyNet();
  }
  
  function timeAdjustment() {
    if (rewind) {
      video.currentTime = media_current_time_mark - 4;
    }

    if (forward) {
      video.currentTime = media_current_time_mark + 4;
    }
  }
  
  function checkIdleState() {
    var video_idle_state = false,
        first_video_position,
        second_video_position;
    
    function firstCheck() {
      first_video_position = video.currentTime;
      // console.log('first_video_position = ' + first_video_position);
    }
    firstCheck();
    
    function secondCheck() {
      setTimeout(function() {
        second_video_position = video.currentTime;
        
        if (first_video_position != second_video_position) {
          video_idle_state = false;

          if (content_controls.hasClass('over')) {
            // console.log("returned");
            return;
          }

          if (!content_controls.hasClass('over')) {
            header.addClass('hide');
          }
        }
       // console.log(video_idle_state);
      }, 3000);

      setTimeout(function() {
        second_video_position = video.currentTime;
        
        if (first_video_position == second_video_position) {
          video_idle_state = true;
          
          header.removeClass('hide');

          if (buffering_indicator.hasClass('show')) {
            // console.log("return");
            return;
          }
          
          media.removeClass('uncompleted').addClass('covered');
        }
        // console.log(video_idle_state);
      }, 8000);
    }
    secondCheck();
  }
  
  
  if (computer) {
    $(document)
      .on('click', '.media', function() {
      this_button = $(this);
      callVariables();
      
      play_pause.click();  
      })
    
      .on('click', '.media .close, .media .content-controls', function(event) {
        event.stopPropagation();
      }) 
    
      .on('mouseover', '.media .content-controls', function() {
      this_button = $(this);
      callVariables();

      if (unwatched) {
        return;
      }

      if (!content_controls.hasClass('over')) {
        content_controls.addClass('over');
      }
    })  
    
      .on('mouseout', '.media .content-controls', function() {
      this_button = $(this);
      callVariables();

      if (unwatched) {
        return;
      }

      content_controls.removeClass('over');
    })  
    
      .on('click', '.media .content-controls button', function(event) {
      this_button = $(this);
      callVariables();
      play_pause = this_button.hasClass('play-pause');
      rewind = this_button.hasClass('rewind');
      forward = this_button.hasClass('forward');

      playPause();
      timeAdjustment(); 
      event.stopPropagation();
      })
    
      .on('mouseover mousemove', '.media', function() {
      this_button = $(this);
      callVariables();
      
      if (unwatched) {
        return;
      }

      header.removeClass('hide');
    })
    
      .on('mouseleave', '.media', function() {
      this_button = $(this);
      callVariables();
      
      if (unwatched) {
        // console.log("unwatched");
        return;
      }
      
      if (!content_controls.hasClass('over')) {
        header.addClass('hide');
      }
    })
  }
  
  if (mobile) {
    $(document)
      .on('touchstart', '.media', function(event) {
      this_button = $(this);
      callVariables();

      if (unwatched) {
        return;
      }
      
      header.toggleClass('hide');
      event.stopPropagation();
      })
    
      .on('touchstart', '.media .close', function(event) {
        event.stopPropagation();
      })
    
      .on('touchstart', '.media .content-controls', function() {
        if (!content_controls.hasClass('over')) {
          content_controls.addClass('over');
        }
        // event.stopPropagation();
      }) 
    
      .on('touchend', '.media .content-controls', function() {
        setTimeout(function() {
          content_controls.removeClass('over');
        }, 2000);
      }) 
    
      .on('touchstart', '.media .content-controls button', function(event) {
      this_button = $(this);
      callVariables();
      play_pause = this_button.hasClass('play-pause');
      rewind = this_button.hasClass('rewind');
      forward = this_button.hasClass('forward');
      enableInlineVideo(video);
      
      if (!content_controls.hasClass('over')) {
        content_controls.addClass('over');
      }

      playPause();
      timeAdjustment();
      event.stopPropagation();
      })
  }
}


 
 
// FILE CLICK 
function onFileClick() {
  $('.mac-os .file')  
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
  imageBlur('.mac-os', '.mac-os > .menu-bar', '.mac-os > .menu-bar > .blur-container .blur', 'background-image');
  imageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
  mediaPreloads();
  callAutomatedText();
  mediaAfterParagraphs();
}




// DESKTOP CLICK
function onWindowClick() {
  $('.mac-os').click(function() {    
    selected_exists = $('.menu-bar .section-container.selected').length == 1;
    if (selected_exists) {
      $('.menu-bar .section-container').removeClass('selected');
    }
  })
}




// WINDOW ON ERROR
window.onerror = function(msg, url, linenumber) {
  if ($('body .rotate-to-landscape')) {
    $('body .rotate-to-landscape').remove();
  }
  
  alert("An error has occured, please throw your device away immediately. lol nah i'm fucking with you but tell me what happened though.");
  
  applicationRemove();
  if ($('.mac-os').hasClass('dim')) {
    $('.mac-os').removeClass('dim');
  }
  parent_container.empty();
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

  function content() {
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
  content();

  function actions() {
    $('.content-controls .send-email').click(function() {
      var email_address = 'mailto:info@acolorblue.co',
          subject = "?subject=Error on " + url,
          content = "&body=" + 
          "CODE ERROR: " + "%0A" + 
          $('.error .code .content').text().replace(". ", ". %0A") + "%0A %0A" + 
          "USER EXPERIENCE: " + "%0A" + 
          $('.error .user-experience .content').text();

      window.location.href = email_address + subject + content;
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
