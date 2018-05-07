// IOS OR ANDROID
function onMobile() {
  if (ios || android) {
    $('.text-editor').addClass('right-corner');
  }
}




// CLOCK
function clock() {
 var date = new Date(),
     month,
     day_of_month,
     year,
     weekday,
     hour, 
     minute,
     meridiem,
     am,
     pm,
     time,
     abbreviations,
     weekday_three_letters,
     weekday_one_letter,
     full_alphabetical_date,
     full_numeric_date,
     full_numeric_time,
     mac_os;
  
  
  function monthConversions() {
    month = date.getMonth();

      if (month == 0) {
        month = 'January';
      }

      if (month == 1) {
        month = 'February';
      }

      if (month == 2) {
        month = 'March';
      }

      if (month == 3) {
        month = 'April';
      }

      if (month == 4) {
        month = 'May';
      }

      if (month == 5) {
        month = 'June';
      }

      if (month == 6) {
        month = 'July';
      } 
      
      if (month == 7) {
        month = 'August';
      } 
      
      if (month == 8) {
        month = 'September';
      } 
      
      if (month == 9) {
        month = 'October';
      } 
      
      if (month == 10) {
        month = 'November';
      } 
      
      if (month == 11) {
        month = 'December';
      } 
  }
  monthConversions();
  
  
  function dayOfMonthConversions() {
    day_of_month = date.getDate();
  }
  dayOfMonthConversions();
  
  
  function yearConversions() {
    year = date.getFullYear();
  }
  yearConversions();
   
  
  function weekdayConversions() {
    weekday = date.getDay();
    
    if (weekday == 0) {
      weekday = 'Sunday';
    }

    if (weekday == 1) {
      weekday = 'Monday';
    }

    if (weekday == 2) {
      weekday = 'Tuesday';
    }

    if (weekday == 3) {
      weekday = 'Wednesday';
    }

    if (weekday == 4) {
      weekday = 'Thursday';
    }

    if (weekday == 5) {
      weekday = 'Friday';
    }

    if (weekday == 6) {
      weekday = 'Saturday';
    }
  }
  weekdayConversions();
  
  
  function hourConversions() {
    hour = date.getHours();
   
    if (hour >= 12) {
      hour -= 12;
    }
    
    if (hour == 0) {
      hour = 12;
    }
  }
  hourConversions();
  
  
  function minuteConversions() {
    minute = date.getMinutes();
    
    if (minute < 10) {
      minute = '0' + minute;
    } 
  }
  minuteConversions();
  
  
  function meridiemConversions() {
    am = date.getHours() < 12 || date.getHours() == 24,
    pm = date.getHours() >= 12 && date.getHours() < 24;
    
    if (am) {
      meridiem = 'AM';
    }

    if (pm) {
      meridiem = 'PM';
    }
  }
  meridiemConversions();
  
  
  function characterVariationsDestinction() {
    mac_os = $('.time').parents('.mac-os').length;
    
    full_alphabetical_date =  weekday + comma + space + month + space + day_of_month + comma + space + year;
    
    full_numeric_date =  month + "/" + day_of_month + "/" + year;
    
    weekday_three_letters = weekday.substr(0, 3);
    
    weekday_one_letter = weekday.substr(0, 1);
    
    full_numeric_time = hour + ':' + minute + space + meridiem;
  }
  characterVariationsDestinction();
  
  
  function placements() {
    $('.mac-os .menu-bar .time-container .time')[0].innerHTML = weekday_three_letters + space + full_numeric_time;
    
    if ($('.mac-os .menu-bar .time-container .full-date').length > 0) {
      $('.mac-os .menu-bar .time-container .full-date')[0].innerHTML = full_alphabetical_date;
    }
    

  }
  placements();
}




// NOTIFICATION SLIDE OUT
function notificationSlide() {
  var notification_center_window = document.createElement('div');
      notification_center_window.className = 'notification-center-window ab-mid';
  
  var twitter_timeline = document.createElement('a');
      twitter_timeline.className = 'twitter-timeline';
      twitter_timeline.src = 'https://twitter.com/search?q=acolorblue';
      twitter_timeline.dataset.widgetId = '993524740462600192';
  
  var timeline_loader = document.createElement('span');
      timeline_loader.className = 'timeline-loader progress-bar ab-mid';

  
  
  
  
  $('.notification-center.icons-b').click(function() {
    $(this).toggleClass('selected');
    
    if ($('.notification-center-window').length == 0) {
      $('.desktop').prepend(notification_center_window);
      notification_center_window.append(twitter_timeline);
      twitter_timeline.append(timeline_loader);
      
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
      $(notification_center_window).toggleClass('slide-out');
    }, 10);
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
      if ($(this).find('.title').text() == $('.text-editor .title').text()) {
        $(this).addClass('selected');
        $('.text-editor').removeClass('scale-down');
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




// APP CLOSE
$('.text-editor .close').click(function() {
  $(this).parents('.text-editor').addClass('scale-down');
  $('.file').removeClass('selected');
  
  var screensaver_credits = document.createElement('span');
      screensaver_credits.className = 'screensaver-credits ab-mid';
      screensaver_credits.innerHTML = "Sahel, Mali by Steve McCurry, 1986.";
  
  if ($('.screensaver-credits').length == 0) {
    $('.desktop').prepend(screensaver_credits);
  }
  
  setTimeout(function () {
    $('.screensaver-credits').addClass('show');
  }, 100);
  
})




// SEARCH TEXT
$('.text-editor .search').click(function() {
  var value_input = document.createElement('input');
      value_input.className = 'searchbar icons-b abs';
      value_input.placeholder = "Spotlight Search";
  
  var content_orig = $('.text-editor .content-container').html();
  
  if ($('.searchbar').length == 1) {
    $('.searchbar').remove();
    $('.text-editor .title').show();
    return;
  }
  
  if ($('.searchbar').length == 0) {
    $('.text-editor .title').hide();
    $('.main-controls').after(value_input);
  }
 

  // SEARCH FUNCTION
  $('.searchbar').keyup(function() {
    var entered_value = $(this).val().toLowerCase();
    var entered_value_global = new RegExp(entered_value, "g");
    var no_value = entered_value == '';
    
    $('.text-editor p').each(function() {
      var paragraph_lower = $(this).text().toLowerCase();
      var paragraph_highlight = paragraph_lower.replace(entered_value_global, '<span class=\'highlight\'>' + entered_value + '</span>');

      if (!paragraph_lower.includes(entered_value)) {
        $(this).hide();
      }
      
      if (paragraph_lower.includes(entered_value)) {
        $(this).show();
        $(this).html(paragraph_highlight);
      }
      
      if (no_value) {
        $('.text-editor .content-container').html(content_orig);
      }
    });
  })
})




// SHARE PAGE
$('.text-editor .share').click(function(event) {
  var social_share_container = document.createElement('div');
      social_share_container.className = 'social-share-container ab-mid';
  
  var social_share = document.createElement('button');

  if ($('.social-share-container').length == 1) {
    $('.social-share-container').remove();
    return;
  }
  
  if ($('.social-share-container').length == 0) {
    $('.call-to-action-controls').append(social_share_container);
    setTimeout(function() {
      social_share_container.className += ' show';
    }, 1000);

    social_share.className = 'twitter-b icons-b abs';
    social_share_container.append(social_share.cloneNode(true));

    social_share.className = 'instagram-b icons-b abs';
    social_share_container.append(social_share.cloneNode(true));

    social_share.className = 'tumblr-b icons-b abs';
    social_share_container.append(social_share.cloneNode(true));
  }
  



  // SOCIAL SHARE FUNCTION
  $('.social-share-container button').click(function(event) {
    var poster = 'https://raw.githubusercontent.com/acolorblue/a-kanye-west-analysis/master/Images/Poster/Poster1.jpg', 
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

      if ($('.searchbar').length == 1) {
        $('.searchbar').remove();
        $('.text-editor .title').show();
      }  

      function closeShare() {
        image_preview.remove();
        $('.text-editor .confirm-action').remove();
        $('.text-editor .cancel-action').remove();
        $('.text-editor .title').text("A Kanye West Analysis");
        $('.text-editor .search').show();
        $('.text-editor .share').show();
        $('.text-editor .content-container p').show();
      }

      $('.text-editor .content-container p').hide();
      $('.text-editor .content-container').prepend(image_preview);
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


 

// WINDOW ON LOAD
window.onload = function() {
  onMobile();
  setInterval(function() {
    clock();
  }, 1000);
  notificationSlide();
  onFileClick();
}
