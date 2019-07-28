import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // -----------------------------------------------------------------------------------

    Template Name: Notika - Notika Admin Template 
    Template URI: 
    Description: Notika Admin Template is a responsive admin template based on the famous Bootstrap framework it's easy to edit and customize by documentation.
    Author: lucidtemplate
    Author URI: 
    Version: 1.0

-----------------------------------------------------------------------------------
    
    CSS INDEX
    ===================
	
    1. Theme Default CSS (body, link color, section etc)
    2. Header Top 
    3. Main Menu
    4. status
    5. statistics 
    6. Email statistics
    7. Recent Post
    8. Blog 
    9. Recent Items
    10. Realtime 
    11. Footer 
    12. Todo 
    13. Chat 
    14. Widget 
    15. Widget contact 
    16. Widget contact Form 
    17. Widget tabs 
    18. Analtic 
    19. Alert 
    20. color 
    21. tabs 
    22. Wizard 
    23. Dropdown triggering 
    24. Modals 
    25. Accordion 
    26. Tooltips 
    27. Popovers 
    28. Typography 
    29. Contact 
    30. Inbox 
    31. View Mail 
    32. Compose Mail 
    33. Normal Table 
    34. Data Table 
    35. Form Element
    36. Form Components

-----------------------------------------------------------------------------------
  // ----------------------------------------
  // 1.  Theme default CSS
/*----------------------------------------
  'html': {
    'fontFamily': ''Roboto', sans-serif',
    'fontWeight': '400'
  },
  'body': {
    'fontFamily': ''Roboto', sans-serif',
    'fontWeight': '400'
  },
  'body': {
    'background': '#F6F8FA'
  },
  'floatleft': {
    'float': 'left'
  },
  'floatright': {
    'float': 'right'
  },
  'alignleft': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'alignright': {
    'float': 'right',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'aligncenter': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'a:focus': {
    'outline': '0px solid'
  },
  'img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'fix': {
    'overflow': 'hidden'
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '700'
  },
  'a': {
    'transition': 'all 0.3s ease 0s',
    'textDecoration': 'none'
  },
  'a:hover': {
    'color': '#00c292',
    'textDecoration': 'none'
  },
  'a:active': {
    'outline': '0 none',
    'textDecoration': 'none'
  },
  'a:hover': {
    'outline': '0 none',
    'textDecoration': 'none'
  },
  'a:focus': {
    'outline': '0 none',
    'textDecoration': 'none'
  },
  'ul': {
    'listStyle': 'outside none none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'clear': {
    'clear': 'both'
  },
  'body': {
  },
  'mg-tb-40': {
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  'mg-tb-30': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'mg-t-30': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'mg-b-15': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'mg-t-15': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'mg-t-10': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'mg-t-20': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'nk-red': {
    'background': '#F44336'
  },
  'nk-pink': {
    'background': '#E91E63'
  },
  'nk-purple': {
    'background': '#9C27B0'
  },
  'nk-deep-purple': {
    'background': '#673AB7'
  },
  'nk-indigo': {
    'background': '#3F51B5'
  },
  'nk-blue': {
    'background': '#2196F3'
  },
  'nk-light-blue': {
    'background': '#03A9F4'
  },
  'nk-cyan': {
    'background': '#00BCD4'
  },
  'nk-teal': {
    'background': '#009688'
  },
  'nk-green': {
    'background': '#4CAF50'
  },
  'nk-light-green': {
    'background': '#8BC34A'
  },
  'nk-lime': {
    'background': '#CDDC39'
  },
  'nk-yellow': {
    'background': '#FFEB3B'
  },
  'nk-amber': {
    'background': '#FFC107'
  },
  'nk-orange': {
    'background': '#FF9800'
  },
  'nk-deep-orange': {
    'background': '#FF5722'
  },
  'nk-brown': {
    'background': '#795548'
  },
  'nk-gray': {
    'background': '#9E9E9E'
  },
  'nk-blue-gray': {
    'background': '#607D8B'
  },
  'nk-black': {
    'background': '#000000'
  },
  'fontFace': {
    'fontFamily': ''notika-icon'',
    'src': 'url('../fonts/notika-icon.eot?qzfrsz')',
    'src': 'url('../fonts/notika-icon.eot?qzfrsz#iefix') format('embedded-opentype'),
    url('../fonts/notika-icon.ttf?qzfrsz') format('truetype'),
    url('../fonts/notika-icon.woff?qzfrsz') format('woff'),
    url('../fonts/notika-icon.svg?qzfrsz#notika-icon') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'sale-statistic-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'statistic-right-area': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'email-statis-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'recent-post-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'blog-inner-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'realtime-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'add-todo-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'notika-chat-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'recent-signup-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'ongoing-task-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'contact-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'contact-form': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'widget-tabs-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'visitor-sv-tm-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'search-engine-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'alert-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'color-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'wizard-wrap-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'dropdown-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'modals-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'accordion-wn-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'tooltips-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'popovers-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'typography-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'typography-heading': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'typography-inline-pro': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'tpgp-helper': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'contact-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'inbox-left-sd': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'inbox-text-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'view-mail-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'normal-table-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'data-table-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'form-element-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'range-slider-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'datepicker-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'colorpicker-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'summernote-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'dropdone-nk': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'form-example-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'invoice-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'google-map-single': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'data-map-single': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'image-cropper-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'nk-cd-ed-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'bar-chart-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'line-chart-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'area-chart-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'flot-chart-wp': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'wb-traffic-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'notika-icon-int': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  // ----------------------------------------
  // 2.  Header Top CSS
/*----------------------------------------
  'header-top-area': {
    'background': '#00c292'
  },
  'footer-copyright-area': {
    'background': '#00c292'
  },
  'logo-area': {
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 0 }]
  },
  'navnavbar-navnotika-top-nav': {
    'float': 'right'
  },
  'navnotika-top-nav open>a': {
    'background': '#00c292',
    'borderColor': '0px solid #00c292'
  },
  'navnotika-top-nav open>a:focus': {
    'background': '#00c292',
    'borderColor': '0px solid #00c292'
  },
  'navnotika-top-nav open>a:hover': {
    'background': '#00c292',
    'borderColor': '0px solid #00c292'
  },
  'navnotika-top-nav>li>a:focus': {
    'textDecoration': 'none',
    'backgroundColor': '#00c292'
  },
  'navnotika-top-nav>li>a:hover': {
    'textDecoration': 'none',
    'backgroundColor': '#00c292'
  },
  'navbar-nav>li>a': {
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }]
  },
  'rtl-layout navbar-nav>li>a': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'navnavbar-navnotika-top-nav li a': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'position': 'relative'
  },
  'header-top-menu navnotika-top-nav li search-dd': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -1 }],
    'left': [{ 'unit': 'px', 'value': -890 }],
    'width': [{ 'unit': 'px', 'value': 1140 }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'default-sidebar-tp header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'sm-ltd-sd header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'lg-sd-tp header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'mini-std-tp header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'lg-tp-ld header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'offcanvas header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'hd-fd-tp header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'dark-header header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'dark-sidebar-tp header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'fullscreen header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -930 }]
  },
  'box-layout header-top-menu navnotika-top-nav li search-dd': {
    'left': [{ 'unit': 'px', 'value': -865 }],
    'width': [{ 'unit': 'px', 'value': 1130 }]
  },
  'header-top-menu navnotika-top-nav li message-dd': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': -100 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'zIndex': '9999'
  },
  'header-top-menu navnotika-top-nav li message-dd hd-mg-tt h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'header-top-menu navnotika-top-nav li message-dd a': {
    'display': 'block'
  },
  'header-top-menu navnotika-top-nav li search-dd search-input': {
    'margin': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 300 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 300 }],
    'position': 'relative'
  },
  'header-top-menu navnotika-top-nav li search-dd search-input input[type="text"]': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#F6F8FA',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 60 }]
  },
  'header-top-menu navnotika-top-nav li search-dd search-input i': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'cursor': 'pointer'
  },
  'hd-message-sn': {
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }]
  },
  'hd-mg-ctn h3': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'hd-mg-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap'
  },
  'hd-message-img': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'hd-mg-ctn': {
    'width': [{ 'unit': 'px', 'value': 210 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'hd-message-info a:hover': {
    'background': '#F6F8FA'
  },
  'header-top-menu navnotika-top-nav li message-dd hd-mg-va a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'header-top-menu navnotika-top-nav li message-dd hd-mg-va a:hover': {
    'color': '#00c292'
  },
  'hd-task-info': {
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'hd-task-info skill progress': {
    'margin': [{ 'unit': 'px', 'value': 28 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'header-top-menu navnotika-top-nav li message-ddnotification-dd': {
    'left': [{ 'unit': 'px', 'value': -150 }]
  },
  'header-top-menu navnotika-top-nav li message-ddtask-dd': {
    'left': [{ 'unit': 'px', 'value': -200 }]
  },
  'header-top-menu navnotika-top-nav li message-ddchat-dd': {
    'left': [{ 'unit': 'px', 'value': -250 }]
  },
  'hd-message-img img': {
    'borderRadius': '50%'
  },
  'hd-message-imgchat-img': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'search-people': {
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'search-people i': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 45 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'search-people input[type="text"]': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }],
    'marginLeft': [{ 'unit': 'px', 'value': 30 }],
    'outline': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'background': '#F6F8FA'
  },
  'hd-message-imgchat-img': {
    'position': 'relative'
  },
  'hd-message-imgchat-img chat-avaible i': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#00c292'
  },
  'ntd-ctn': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': -8 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'background': '#e46a76',
    'height': [{ 'unit': 'px', 'value': 18 }],
    'width': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'center',
    'borderRadius': '50%',
    'zIndex': '999'
  },
  'spinner4': {
    'width': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 15 }],
    'borderRadius': '50%',
    'position': 'absolute',
    'display': 'inline-block',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'left': [{ 'unit': 'px', 'value': -14 }]
  },
  'spinner4:after': {
    'content': '""',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '50%'
  },
  'spinner4:before': {
    'content': '""',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '50%'
  },
  'spinner-4::before': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'background': 'orangered',
    'WebkitAnimation': 'pulse 3s linear infinite',
    'animation': 'pulse 3s linear infinite',
    'opacity': '0',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'spinner-4::after': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'background': 'orangered',
    'WebkitAnimation': 'pulse 3s linear infinite',
    'animation': 'pulse 3s linear infinite',
    'opacity': '0',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'spinner-4:after': {
    'WebkitAnimation': 'pulse 2s linear 2.3s infinite',
    'animation': 'pulse 2s linear 2.3s infinite',
    'zIndex': '99'
  },
  // ----------------------------------------
  // 3.  Main Menu CSS
/*----------------------------------------
  'nav-tabsnotika-menu-wrap': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'nav-tabsnotika-menu-wrap>liactive>a': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'nav-tabsnotika-menu-wrap>liactive>a:focus': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'nav-tabsnotika-menu-wrap>liactive>a:hover': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'notika-tab-menu-bg': {
    'position': 'relative'
  },
  'notika-tab-menu-bg:before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'content': '""',
    'zIndex': '9',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'custom-menu-content ulnotika-main-menu-dropdown': {
    'position': 'relative',
    'zIndex': '99'
  },
  'ulnotika-menu-wrap li a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'custom-menu-content ulnotika-main-menu-dropdown li': {
    'display': 'inline-block'
  },
  'custom-menu-content ulnotika-main-menu-dropdown li a': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'custom-menu-content ulnotika-main-menu-dropdown li ullayout-more-dp': {
    'position': 'absolute',
    'zIndex': '999',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': 'px', 'value': -20 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0px'
  },
  'custom-menu-content ulnotika-main-menu-dropdown li ullayout-more-dp li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'animated': {
    'WebkitAnimationDuration': '1s',
    'animationDuration': '1s',
    'WebkitAnimationFillMode': 'none!important',
    'animationFillMode': 'none!important'
  },
  'mg-t-80-b-40': {
    'margin': [{ 'unit': 'px', 'value': 102 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  'mean-container mean-nav ul li a': {
    'color': '#333'
  },
  'mean-container mean-nav ul li a:hover': {
    'color': '#00c292'
  },
  'box-layout header-top-area': {
    'width': [{ 'unit': 'px', 'value': 1200 }]
  },
  // ----------------------------------------
  // 4.  status CSS
/*----------------------------------------
  'wb-traffic-inner': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'display': 'flex'
  },
  'website-traffic-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'curved-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'past-day-statis h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'email-ctn-round h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'recent-post-title h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'recent-items-title h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'realtime-title h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'contact-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'animation-ctn-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'alert-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'color-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'tab-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'wizard-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'dropdown-trig-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'modals-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'accordion-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'tooltips-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'popovers-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'typography-list h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'typography-heading h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'typography-in-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'tpgp-hp-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'view-mail-hrd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'multiupload-sys h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'basic-tb-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'website-traffic-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'curved-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'recent-post-title p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'recent-post-it-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'view-ml-rl p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mail-ads p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'multiupload-sys p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'sparkline-bar-stats1': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'sparkline-bar-stats2': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'sparkline-bar-stats3': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'sparkline-bar-stats4': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  // ----------------------------------------
  // 5.  statistics CSS
/*----------------------------------------
  'flot-chart': {
    'height': [{ 'unit': 'px', 'value': 319 }]
  },
  'flot-chartflot-chart-sts': {
    'height': [{ 'unit': 'px', 'value': 308 }]
  },
  '#flotTip': {
    'position': 'absolute',
    'color': '#333',
    'display': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#fff',
    'zIndex': '99999'
  },
  'flot-tooltip': {
    'position': 'absolute',
    'color': '#333',
    'display': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#fff',
    'zIndex': '99999'
  },
  'jqstooltip': {
    'width': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'curved-inner-pro': {
    'display': 'flex'
  },
  'past-statistic-an': {
    'display': 'flex'
  },
  'recent-post-ctn': {
    'display': 'flex'
  },
  'recent-post-flex': {
    'display': 'flex'
  },
  'recent-items-ctn': {
    'display': 'flex'
  },
  'realtime-ctn': {
    'display': 'flex'
  },
  'realtime-visitor-ctn': {
    'display': 'flex'
  },
  'realtime-ctn-bw': {
    'display': 'flex'
  },
  'dw-st-ic': {
    'display': 'flex'
  },
  'wb-traffic-inner': {
    'display': 'flex'
  },
  'curved-icon': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'past-statistic-graph': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'recent-post-icon': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'recent-items-icon': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'realtime-icon': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'curved-icon a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#666',
    'transition': 'all .4s ease 0s'
  },
  'recent-post-icon a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#666',
    'transition': 'all .4s ease 0s'
  },
  'recent-items-icon a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#666',
    'transition': 'all .4s ease 0s'
  },
  'realtime-icon a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#666',
    'transition': 'all .4s ease 0s'
  },
  'recent-post-icon a': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'recent-items-icon a': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'realtime-icon a': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'recent-post-icon a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'curved-icon a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'recent-items-icon a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'realtime-icon a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'past-day-statis p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'past-statistic-ctn p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'email-ctn-nock p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'blog-ctn p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'animation-ctn-hd p': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'animation-ctn-hd p': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'animation-ctn-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'past-statistic-ctn p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'past-statistic-an': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'past-statistic-an:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'past-statistic-ctn h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'sale-statistic-inner': {
    'overflow': 'hidden'
  },
  'flot-chart-sts': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'left': [{ 'unit': 'px', 'value': -10 }],
    'bottom': [{ 'unit': 'px', 'value': -10 }]
  },
  'flot-chartflot-ch-pg': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'left': [{ 'unit': 'px', 'value': -10 }],
    'bottom': [{ 'unit': 'px', 'value': -10 }]
  },
  'past-day-statis p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'past-day-statis': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'curved-inner-pro': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 6.  Email statistics CSS
/*----------------------------------------
  'email-round-nock': {
    'height': [{ 'unit': 'px', 'value': 130 }]
  },
  'email-ctn-nock p': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'zIndex': '9',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'email-ctn-round': {
    'textAlign': 'center'
  },
  'email-round-gp': {
    'display': 'flex',
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'email-signle-gp': {
    'height': [{ 'unit': 'px', 'value': 90 }]
  },
  'email-round-pro': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'email-ctn-round h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left'
  },
  'email-statis-wrap': {
    'display': 'block'
  },
  // ----------------------------------------
  // 7.  Recent Post CSS
/*----------------------------------------
  'realtime-title h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'recent-post-title h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'recent-items-title h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'recent-post-it-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'transition': 'all .4s ease 0s'
  },
  'realtime-vst-sg h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'transition': 'all .4s ease 0s'
  },
  'recent-post-it-ctn': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'recent-post-it-ctn': {
    'overflow': 'hidden'
  },
  'recent-post-it-ctn p': {
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden'
  },
  'recent-post-img img': {
    'borderRadius': '50%'
  },
  'recent-post-flexrc-ps-vw': {
    'textAlign': 'center',
    'display': 'block'
  },
  'recent-post-flexrc-ps-vw recent-post-line p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'realtime-vst-sg p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'realtime-title p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'recent-post-flexrc-ps-vw recent-post-line p:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'recent-post-items recent-post-signle:hover recent-post-it-ctn h2': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'blog-ctn vw-at:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'rct-pt-mg': {
    'marginTop': [{ 'unit': 'px', 'value': 19 }]
  },
  // ----------------------------------------
  // 8.  Blog CSS
/*----------------------------------------
  'blog-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'blog-ctn bg-au': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#333',
    'display': 'block'
  },
  'blog-ctn vw-at': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'realtime-ctn span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'blog-ctn p': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 14 }]
  },
  'blog-hd-sw': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 9.  Recent Items CSS
/*----------------------------------------
  'recent-items-wp': {
    'overflow': 'hidden',
    'background': '#fff'
  },
  'flot-chart-items': {
    'height': [{ 'unit': 'px', 'value': 143 }],
    'width': [{ 'unit': '%H', 'value': NaN }],
    'margin': [{ 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -10 }],
    'bottom': [{ 'unit': 'px', 'value': -10 }],
    'background': '#fff'
  },
  'rc-it-ltd': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'flot-chart-itemsflot-chartvt-ct-it': {
    'height': [{ 'unit': 'px', 'value': 98 }]
  },
  'email-rdn-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'recent-post-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'recent-items-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // ----------------------------------------
  // 10.  Realtime CSS
/*----------------------------------------
  'jvectormap-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 220 }]
  },
  'jvectormap-zoomin': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '3px',
    'background': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'color': 'white',
    'cursor': 'pointer',
    'lineHeight': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'boxSizing': 'content-box'
  },
  'jvectormap-zoomout': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '3px',
    'background': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'color': 'white',
    'cursor': 'pointer',
    'lineHeight': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'boxSizing': 'content-box'
  },
  'jvectormap-goback': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '3px',
    'background': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'color': 'white',
    'cursor': 'pointer',
    'lineHeight': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'boxSizing': 'content-box'
  },
  'realtime-vst-sg': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'realtime-country-ctn': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'realtime-country-ctnrealtime-ltd-mg': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'realtime-country-ctn h5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'fontWeight': '400',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'realtime-ctn-st': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'realtime-bw': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'realtime-ctn-st img': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'realtime-ctn': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'realtime-map': {
    'margin': [{ 'unit': 'px', 'value': 28 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 11.  Footer CSS
/*----------------------------------------
  'footer-copyright-area': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'footer-copyright-area p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'footer-copyright-area a': {
    'color': '#fff',
    'transition': 'all .4s ease 0s'
  },
  'footer-copyright-area a:hover': {
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  // ----------------------------------------
  // 12.  Todo CSS
/*----------------------------------------
  'todo-list li': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }],
    'background': 'transparent !important',
    'display': 'block',
    'textAlign': 'left'
  },
  'checkbox input[type="checkbox"]': {
    'cursor': 'pointer',
    'opacity': '0',
    'zIndex': '1',
    'outline': 'none !important'
  },
  'checkbox label': {
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'checkbox-primary input[type="checkbox"]:checked + label::before': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292'
  },
  'checkbox label::before': {
    'OTransition': '0.3s ease-in-out',
    'WebkitTransition': '0.3s ease-in-out',
    'backgroundColor': '#ffffff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#80898e' }],
    'content': '""',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'transition': '0.3s ease-in-out',
    'width': [{ 'unit': 'px', 'value': 17 }],
    'outline': 'none !important'
  },
  'checkbox-primary input[type="checkbox"]:checked + label::after': {
    'color': '#ffffff'
  },
  'checkbox input[type="checkbox"]:checked + label::after': {
    'content': '"\f00c"',
    'fontFamily': ''FontAwesome''
  },
  'checkbox label::after': {
    'color': '#333333',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 3 }],
    'paddingTop': [{ 'unit': 'px', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 16 }]
  },
  'notika-todo-btn a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292'
  },
  'notika-add-todo': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292'
  },
  'notika-chat-btn': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292'
  },
  'notika-todo-btn a:hover': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-todo-btn a:active': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-todo-btn a:focus': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-add-todo:hover': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-add-todo:active': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-add-todo:focus': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-add-todo:visited': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-chat-btn:hover': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-chat-btn:active': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-chat-btn:focus': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-chat-btn:visited': {
    'color': '#fff',
    'background': '#00c292',
    'outline': 'none'
  },
  'notika-todo-scrollbar mCSB_outside+mCSB_scrollTools': {
    'right': [{ 'unit': 'px', 'value': -15 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'widgets-chat-scrollbar mCSB_outside+mCSB_scrollTools': {
    'right': [{ 'unit': 'px', 'value': -15 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  '#todo-message': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 13.  Chat CSS
/*----------------------------------------
  'conversation-list chat-avatar img': {
    'borderRadius': '100%'
  },
  'conversation-list chat-avatar i': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontStyle': 'normal'
  },
  'conversation-list conversation-text': {
    'display': 'inline-block',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'textAlign': 'left'
  },
  'conversation-list ctext-wrap': {
    'MozBorderRadius': '3px',
    'WebkitBorderRadius': '3px',
    'background': '#f5f5f5',
    'borderRadius': '3px',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative'
  },
  'conversation-list ctext-wrap i': {
    'color': '#343c49',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'normal',
    'fontWeight': '600',
    'position': 'relative'
  },
  'conversation-list ctext-wrap p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 3 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'conversation-list ctext-wrap:after': {
    'right': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': '%V', 'value': 0.2 }],
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(213, 242, 239, 0)' }],
    'content': '" "',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'pointerEvents': 'none',
    'borderRightColor': '#f5f5f5',
    'marginTop': [{ 'unit': 'px', 'value': -5 }]
  },
  'conversation-list odd ctext-wrap': {
    'background': '#00c292 !important'
  },
  'conversation-list li': {
    'marginBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'conversation-list odd chat-avatar': {
    'float': 'right !important'
  },
  'conversation-list chat-avatar': {
    'display': 'inline-block',
    'float': 'left',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 40 }]
  },
  'conversation-list ctext-wrapchat-widgets-cn i': {
    'color': '#fff'
  },
  'conversation-list ctext-wrapchat-widgets-cn p': {
    'color': '#fff'
  },
  'conversation-list odd ctext-wrap:after': {
    'borderColor': 'rgba(238, 238, 242, 0) !important',
    'borderLeftColor': '#00c292 !important',
    'left': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'top': [{ 'unit': '%V', 'value': 0.2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'conversation-list odd conversation-text': {
    'float': 'right !important',
    'marginRight': [{ 'unit': 'px', 'value': 12 }],
    'textAlign': 'right',
    'width': [{ 'unit': '%H', 'value': 0.7 }, { 'unit': 'string', 'value': '!important' }]
  },
  'chat-widget-input': {
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  // ----------------------------------------
  // 14.  Widget CSS
/*----------------------------------------
  'widget-signup-list a': {
    'height': [{ 'unit': 'px', 'value': 46 }],
    'borderRadius': '50%',
    'background': '#00c292',
    'width': [{ 'unit': 'px', 'value': 46 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 7.2 }, { 'unit': 'px', 'value': 4.4 }, { 'unit': 'px', 'value': 7.2 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 46 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#fff'
  },
  'widget-signup-list img': {
    'borderRadius': '50%',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -1 }]
  },
  'widget-signup-list awidgets-mg-sn': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'realtime-title p': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'skill-content-3': {
    'overflow': 'hidden'
  },
  'skill progress lead-content': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -30 }],
    'zIndex': '99',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'skill progress lead-content p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'skill progress': {
    'backgroundColor': '#f0f0f0',
    'borderRadius': '0',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'height': [{ 'unit': 'px', 'value': 5 }],
    'overflow': 'visible',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 0 }]
  },
  'skill progressprogress-bt': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'skill progress-bar > span': {
    'background': '#333 none repeat scroll 0 0',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': -26 }],
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'zIndex': '99'
  },
  'skill progress-bar > span:before': {
    'border': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'content': '" "',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'pointerEvents': 'none',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'skill progress-bar > span:after': {
    'border': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'content': '" "',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'pointerEvents': 'none',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'skill progress-bar > span:before': {
    'borderTopColor': '#333',
    'borderWidth': '5px',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }]
  },
  'holax-shop h3': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'we-are-good-at h3': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'skill progress:nth-child(1) progress-bar': {
    'background': '#00c292'
  },
  'skill progress:nth-child(2) progress-bar': {
    'background': '#fb9678'
  },
  'skill progress:nth-child(3) progress-bar': {
    'background': '#01c0c8'
  },
  'skill progress:nth-child(4) progress-bar': {
    'background': '#ab8ce4'
  },
  'skill progress:nth-child(5) progress-bar': {
    'background': '#e46a76'
  },
  'view-all-onging': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'view-all-onging a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'view-all-onging a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'flot-chart--xs': {
    'height': [{ 'unit': 'px', 'value': 70 }]
  },
  'widget-inner-wp p': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'realtime-titlesignup-hd-wd h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'realtime-titleongoing-hd-wd h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'realtime-titlewidget-inner-wpsignup-hd-wd p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'realtime-titleongoing-hd-wd p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-signup-list asignup-wd-mn': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'skill-content-3ongoing-tsk lead-content p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 15.  Widget contact CSS
/*----------------------------------------
  'contact-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'contact-dt ulcontact-list li': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'contact-dt ulcontact-list': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact-dt ulcontact-list li i': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  '#map6': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'contact-dt ulcontact-list li:first-child': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 16.  Widget contact Form CSS
/*----------------------------------------
  'form-single': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }]
  },
  'form-single input[type="text"]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F6F8FA' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'outline': 'none',
    'transition': 'all .4s ease 0s'
  },
  'form-single input[type="email"]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F6F8FA' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'outline': 'none',
    'transition': 'all .4s ease 0s'
  },
  'form-single input[type="number"]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F6F8FA' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'outline': 'none',
    'transition': 'all .4s ease 0s'
  },
  'form-single input[type="text"]:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s'
  },
  'form-single input[type="email"]:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s'
  },
  'form-single input[type="number"]:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s'
  },
  'form-single textarea:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s'
  },
  'form-single textarea': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 140 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F6F8FA' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'outline': 'none',
    'transition': 'all .4s ease 0s'
  },
  'buttonbtn': {
    'background': '#00c292',
    'borderRadius': '2px',
    'outline': 'none',
    'color': '#fff'
  },
  'buttonbtn:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'buttonbtn:active': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  // ----------------------------------------
  // 17.  Widget tabs CSS
/*----------------------------------------
  'widget-tabs-list': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'widget-tabs-inttab-ctm-wp widget-tabs-list': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'widget-tabs-list nav-tabs>liactive>a': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'color': '#333'
  },
  'widget-tabs-list nav-tabs>liactive>a:focus': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'color': '#333'
  },
  'widget-tabs-list nav-tabs>liactive>a:hover': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'color': '#333'
  },
  'widget-tabs-list nav>li>a': {
    'color': '#333',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'widget-tabs-list tab-content': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'widget-tabs-list nav-tabs:not([data-tab-color])>li>a:after': {
    'background': '#00c292'
  },
  'wizard-cts-st navnav-pills:not([data-tab-color])>li>a:after': {
    'background': '#00c292'
  },
  'widget-tabs-list nav-tabs liactive>a:after': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'wizard-cts-st navnav-pills>liactive>a:after': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'widget-tabs-list nav-tabs li>a:after': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '250ms',
    'transitionDuration': '250ms',
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)'
  },
  'wizard-cts-st navnav-pills>li>a:after': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '250ms',
    'transitionDuration': '250ms',
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)'
  },
  'widget-tabs-list nav-tabs li>a:after': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'wizard-cts-st navnav-pills>li>a:after': {
    'bottom': [{ 'unit': 'px', 'value': -1 }]
  },
  'widget-tabs-list nav-tabs li>a:after': {
    'content': '""',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'wizard-cts-st navnav-pills>li>a:after': {
    'content': '""',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'tab-ctn': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'tab-custom-st tab-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'tab-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'ultab-ctn-list li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'ultab-ctn-list li:first-child': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'ultab-ctn-list li:last-child': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'widget-tabs-list navnav-tabs>li>a': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }]
  },
  'contact-hdtm-activity p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tab-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'widget-tabs-listtab-pt-mg': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 18.  Analtic CSS
/*----------------------------------------
  '[class*=flc-] legendLabel': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }]
  },
  '[class*=flc-]': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }]
  },
  '[class*=flc-] table': {
    'display': 'inline-block'
  },
  'visitor-ov-ct flot-chart': {
    'height': [{ 'unit': 'px', 'value': 282 }]
  },
  'search-engine-img': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'search-eg-table table': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'search-eg-table i': {
    'color': '#00c292',
    'marginLeft': [{ 'unit': 'px', 'value': 2 }]
  },
  'search-eg-table notika-down-arrow': {
    'color': '#F44336'
  },
  'search-eg-table table tr': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'search-eg-table table td': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'search-eg-table table h4': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'contact-hdmg-bt-ant-inner': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact-hdmg-bt-ant-inner p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-hdmg-bt-ant-innerserver-sts-rgt': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact-hdsearch-hd-eg p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-hdsearch-hd-eg': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'search-eg-table table>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  // ----------------------------------------
  // 19.  Alert CSS
/*----------------------------------------
  'alert-list p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'alert-list alert-success': {
    'borderRadius': '3px',
    'color': '#fff'
  },
  'alert-list alert-info': {
    'borderRadius': '3px',
    'color': '#fff'
  },
  'alert-list alert-warning': {
    'borderRadius': '3px',
    'color': '#fff'
  },
  'alert-list alert-danger': {
    'borderRadius': '3px',
    'color': '#fff'
  },
  'alert-list alert-success': {
    'background': '#4CAF50'
  },
  'alert-list alert-info': {
    'background': '#2196F3'
  },
  'alert-list alert-warning': {
    'background': '#FFC107'
  },
  'alert-list alert-danger': {
    'background': '#F44336'
  },
  'alert-mg-b-0': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'alert-list alert-link': {
    'color': '#fff'
  },
  'alert-list close': {
    'color': '#fff !important',
    'opacity': '1',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'top': [{ 'unit': 'px', 'value': 2 }]
  },
  'alert-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'alert-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 20.  color CSS
/*----------------------------------------
  'color-single': {
    'color': '#fff',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'borderRadius': '3px'
  },
  'color-single h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#fff'
  },
  'color-single p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'color-single span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff'
  },
  'color-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tab-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'color-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 21.  tabs CSS
/*----------------------------------------
  'tab-custom-st p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'wizard-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'wizard-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'dropdown-trig-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modals-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'contact-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'image-crp-img p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'cp-img-anal p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tab-mg-b-0': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'nav-tabstab-nav-center': {
    'textAlign': 'center'
  },
  'nav-tabstab-nav-right': {
    'textAlign': 'right'
  },
  'nav-tabstab-nav-right>li': {
    'float': 'none',
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'display': 'inline-block'
  },
  'nav-tabstab-nav-center>li': {
    'float': 'none',
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'display': 'inline-block'
  },
  'tab-custom-sttab-ctn-right p': {
    'textAlign': 'right'
  },
  // ----------------------------------------
  // 22.  Wizard CSS
/*----------------------------------------
  'ulwizard-nav-ac': {
    'textAlign': 'center'
  },
  'ulwizard-nav-ac li': {
    'display': 'inline-block'
  },
  'ulwizard-nav-ac li a': {
    'height': [{ 'unit': 'px', 'value': 35 }],
    'width': [{ 'unit': 'px', 'value': 35 }],
    'borderRadius': '50%',
    'background': '#00c292',
    'color': '#fff',
    'display': 'inline-block'
  },
  'ulwizard-nav-ac li i': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'ulwizard-nav-ac li disabled': {
    'background': '#ccc',
    'color': '#333'
  },
  'wizard-cts-st navnav-pills': {
    'textAlign': 'center'
  },
  'wizard-cts-st navnav-pills>li': {
    'float': 'none',
    'display': 'inline-block'
  },
  'wizard-cts-st navnav-pills': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'wizard-cts-st navnav-pills>liactive>a': {
    'background': '#fff',
    'color': '#000'
  },
  'wizard-cts-st navnav-pills>liactive>a:focus': {
    'background': '#fff',
    'color': '#000'
  },
  'wizard-cts-st navnav-pills>liactive>a:hover': {
    'background': '#fff',
    'color': '#000'
  },
  'wizard-cts-st navnav-pills>li>a:focus': {
    'textDecoration': 'none',
    'backgroundColor': '#fff'
  },
  'wizard-cts-st navnav-pills>li>a:hover': {
    'textDecoration': 'none',
    'backgroundColor': '#fff'
  },
  'wizard-cts-st navnav-pills>li>a': {
    'backgroundColor': '#fff',
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'wizard-action-pro': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'wizard-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'wizard-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  '#rootwizard navbar': {
    'minHeight': [{ 'unit': 'string', 'value': 'unset' }]
  },
  'wizard-ctn wizard-mg-ctn': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 23.  Dropdown triggering CSS
/*----------------------------------------
  'dropdown-trig-sing dropdown-menu': {
    'display': 'block',
    'position': 'relative',
    'float': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-trig-sing dropdown-menu[class*=nk-]>li>a': {
    'color': '#fff !important'
  },
  'dropdown-trig-sing dropdown-menu divider': {
    'height': [{ 'unit': 'px', 'value': 1 }],
    'backgroundColor': 'rgba(0,0,0,.08)'
  },
  'dropdown-trig-sing dropdown-menu>li>a:focus': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'dropdown-trig-sing dropdown-menu>li>a:hover': {
    'backgroundColor': 'rgba(0,0,0,.075)'
  },
  'dropdown-trig-sing dropdown-menu li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'dropdown-trig-list dropdown-trig-sing': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'dropdown-trig-sgn': {
    'display': 'inline-block'
  },
  'dropdown-trig-sgn btn': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '3px',
    'outline': 'none',
    'color': '#fff',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'dropdown-trig-sgn btn:hover': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'dropdown-trig-sgn btn:focus': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'dropdown-trig-sgn btn:active': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'dropdown-trig-sgn dropdown-menu li a': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeIn-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeInUp-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeInLeft-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-shake-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-swing-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-jello-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-bounceIn-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-bounceInUp-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-flip-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-flipInX-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-flipInY-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-rotateIn-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-zoomIn-dp': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'zIndex': '99999'
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeIn-dp': {
    'left': [{ 'unit': '%H', 'value': 0.01 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeInUp-dp': {
    'left': [{ 'unit': '%H', 'value': 0.08 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-fadeInLeft-dp': {
    'left': [{ 'unit': '%H', 'value': 0.17 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-shake-dp': {
    'left': [{ 'unit': '%H', 'value': 0.27 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-swing-dp': {
    'left': [{ 'unit': '%H', 'value': 0.33 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-jello-dp': {
    'left': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-bounceIn-dp': {
    'left': [{ 'unit': '%H', 'value': 0.46 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-bounceInUp-dp': {
    'left': [{ 'unit': '%H', 'value': 0.54 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-flip-dp': {
    'left': [{ 'unit': '%H', 'value': 0.64 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-flipInX-dp': {
    'left': [{ 'unit': '%H', 'value': 0.69 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-flipInY-dp': {
    'left': [{ 'unit': '%H', 'value': 0.76 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-rotateIn-dp': {
    'left': [{ 'unit': '%H', 'value': 0.82 }]
  },
  'dropdown-trig-sgn dropdown-menutriger-zoomIn-dp': {
    'left': [{ 'unit': '%H', 'value': 0.82 }]
  },
  'dropdown-trig-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-trig-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 24.  Modals CSS
/*----------------------------------------
  'modals-single p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#222',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modals-default-notika': {
    'background': '#ccc',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 190 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 190 }]
  },
  'modal-inner-pro': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'modal-inner-pro h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'modals-default modal-body h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'modal-sm modal-body h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'modal-large modal-body h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'modal-inner-pro p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modals-default modal-body p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modal-sm modal-body p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modal-large modal-body p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'accordion-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tooltips-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tooltips-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tooltips-static p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'popovers-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-list p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tpgp-ele-tx p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'view-mail-atn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'basic-tb-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'modal-ft': {
    'textAlign': 'right'
  },
  'modal-ft btn-modal': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'modals-default-cl btn-info': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'modal-sm modal-footer btn-default': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'modal-large modal-footer btn-default': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'modals-default modal-footer btn-default': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'modals-default-cl btn-info': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'modal-ft btn-modal': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'modal-footer btn+btn': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'modal-ft btn-modal:focus': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-ft btn-modal:active': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-ft btn-modal:hover': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default-cl btn-info:focus': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default-cl btn-info:active': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default-cl btn-info:hover': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default modal-footer btn-default:focus': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default modal-footer btn-default:active': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default modal-footer btn-default:hover': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-sm modal-footer btn-default:focus': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-sm modal-footer btn-default:active': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-sm modal-footer btn-default:hover': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-large modal-footer btn-default:focus': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-large modal-footer btn-default:active': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modal-large modal-footer btn-default:hover': {
    'background': '#00c292',
    'outline': 'none',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'modals-default close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -15 }],
    'top': [{ 'unit': 'px', 'value': -15 }],
    'background': '#00c292',
    'opacity': '1',
    'color': '#fff',
    'height': [{ 'unit': 'px', 'value': 26 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'borderRadius': '50%',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'outline': 'none'
  },
  'modal-sm close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -15 }],
    'top': [{ 'unit': 'px', 'value': -15 }],
    'background': '#00c292',
    'opacity': '1',
    'color': '#fff',
    'height': [{ 'unit': 'px', 'value': 26 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'borderRadius': '50%',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'outline': 'none'
  },
  'modal-large close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -15 }],
    'top': [{ 'unit': 'px', 'value': -15 }],
    'background': '#00c292',
    'opacity': '1',
    'color': '#fff',
    'height': [{ 'unit': 'px', 'value': 26 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'borderRadius': '50%',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'outline': 'none'
  },
  'modal-dialogmodals-default': {
    'width': [{ 'unit': 'px', 'value': 720 }],
    'marginTop': [{ 'unit': 'px', 'value': 110 }]
  },
  'modal-dialogmodal-sm': {
    'width': [{ 'unit': 'px', 'value': 510 }],
    'marginTop': [{ 'unit': 'px', 'value': 110 }]
  },
  'modal-dialogmodal-large': {
    'width': [{ 'unit': 'px', 'value': 910 }],
    'marginTop': [{ 'unit': 'px', 'value': 110 }]
  },
  'modal-dialogmodals-default modal-content': {
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }]
  },
  'modal-dialogmodal-sm modal-content': {
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }]
  },
  'modal-dialogmodal-large modal-content': {
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 100 }]
  },
  'modals-default modal-header': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modals-default modal-footer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modals-default modal-body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-sm modal-body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-sm modal-header': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-sm modal-footer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-large modal-body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-large modal-header': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modal-large modal-footer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'modals-hd a': {
    'color': '#333'
  },
  'accordion-hd a': {
    'color': '#333'
  },
  'tab-hd a': {
    'color': '#333'
  },
  'modals-hd a:hover': {
    'color': '#00c292'
  },
  'accordion-hd a:hover': {
    'color': '#00c292'
  },
  'tab-hd a:hover': {
    'color': '#00c292'
  },
  'modals-default-cl nk-redbtn-info': {
    'background': '#F44336'
  },
  'modals-default-cl nk-light-bluebtn-info': {
    'background': '#03A9F4'
  },
  'modals-default-cl nk-cyanbtn-info': {
    'background': '#00BCD4'
  },
  'modals-default-cl nk-deep-purplebtn-info': {
    'background': '#673AB7'
  },
  'modals-default-cl nk-indigobtn-info': {
    'background': '#3F51B5'
  },
  'modals-default-cl nk-bluebtn-info': {
    'background': '#2196F3'
  },
  'modals-defaultnk-red modal-content': {
    'background': '#F44336'
  },
  'modals-defaultnk-red close': {
    'background': '#F44336'
  },
  'modals-defaultnk-red modal-footer btn-default': {
    'background': '#F44336'
  },
  'modals-defaultnk-red modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F44336' }]
  },
  'modals-defaultnk-light-blue modal-content': {
    'background': '#03A9F4'
  },
  'modals-defaultnk-light-blue close': {
    'background': '#03A9F4'
  },
  'modals-defaultnk-light-blue modal-footer btn-default': {
    'background': '#03A9F4'
  },
  'modals-defaultnk-light-blue modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#03A9F4' }]
  },
  'modals-defaultnk-cyan modal-content': {
    'background': '#00BCD4'
  },
  'modals-defaultnk-cyan close': {
    'background': '#00BCD4'
  },
  'modals-defaultnk-cyan modal-footer btn-default': {
    'background': '#00BCD4'
  },
  'modals-defaultnk-cyan modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00BCD4' }]
  },
  'modals-defaultnk-deep-purple modal-content': {
    'background': '#673AB7'
  },
  'modals-defaultnk-deep-purple close': {
    'background': '#673AB7'
  },
  'modals-defaultnk-deep-purple modal-footer btn-default': {
    'background': '#673AB7'
  },
  'modals-defaultnk-deep-purple modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#673AB7' }]
  },
  'modals-defaultnk-indigo modal-content': {
    'background': '#3F51B5'
  },
  'modals-defaultnk-indigo close': {
    'background': '#3F51B5'
  },
  'modals-defaultnk-indigo modal-footer btn-default': {
    'background': '#3F51B5'
  },
  'modals-defaultnk-indigo modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3F51B5' }]
  },
  'modals-defaultnk-blue modal-content': {
    'background': '#2196F3'
  },
  'modals-defaultnk-blue close': {
    'background': '#2196F3'
  },
  'modals-defaultnk-blue modal-footer btn-default': {
    'background': '#2196F3'
  },
  'modals-defaultnk-blue modal-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2196F3' }]
  },
  'modals-defaultnk-red modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-red modal-body p': {
    'color': '#fff'
  },
  'modals-defaultnk-light-blue modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-light-blue modal-body p': {
    'color': '#fff'
  },
  'modals-defaultnk-cyan modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-cyan modal-body p': {
    'color': '#fff'
  },
  'modals-defaultnk-deep-purple modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-deep-purple modal-body p': {
    'color': '#fff'
  },
  'modals-defaultnk-indigo modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-indigo modal-body p': {
    'color': '#fff'
  },
  'modals-defaultnk-blue modal-body h2': {
    'color': '#fff'
  },
  'modals-defaultnk-blue modal-body p': {
    'color': '#fff'
  },
  'modals-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'modal-df-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'modals-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 25.  Accordion CSS
/*----------------------------------------
  'panel-collapse panel-heading': {
    'position': 'relative'
  },
  'panel-collapse panel-heading panel-title>a:after': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'content': '""',
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s',
    'WebkitBackfaceVisibility': 'hidden',
    'MozBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden'
  },
  'panel-collapse panel-heading panel-title>a:before': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'content': '""',
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s',
    'WebkitBackfaceVisibility': 'hidden',
    'MozBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden'
  },
  'panel-collapse panel-heading panel-title>a:after': {
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)'
  },
  'panel-collapse panel-heading:not(active) panel-title>a:before': {
    'background': '#eee'
  },
  'panel-collapse panel-heading:after': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s',
    'WebkitBackfaceVisibility': 'hidden',
    'MozBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden',
    'top': [{ 'unit': 'px', 'value': 8 }]
  },
  'panel-collapse panel-heading:before': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s',
    'WebkitBackfaceVisibility': 'hidden',
    'MozBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden',
    'top': [{ 'unit': 'px', 'value': 8 }]
  },
  'panel-collapse panel-heading:before': {
    'content': '"\e923"',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'fontFamily': ''notika-icon''
  },
  'panel-collapse panel-heading:after': {
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)',
    'content': '"\e91b"',
    'fontFamily': ''notika-icon''
  },
  'panel-collapse panel-headingactive panel-title>a:after': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'panel-collapse panel-headingactive:before': {
    'WebkitTransform': 'scale(0) rotate(-90deg)',
    'MsTransform': 'scale(0) rotate(-90deg)',
    'OTransform': 'scale(0) rotate(-90deg)',
    'transform': 'scale(0) rotate(-90deg)'
  },
  'panel-collapse panel-headingactive:after': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'panel-collapse panel-body': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'paddingRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'panel-group:not([data-collapse-color]) panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#2196F3'
  },
  'panel-group[data-collapse-color=nk-green] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#00c292'
  },
  'panel-group[data-collapse-color=nk-red] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#F44336'
  },
  'panel-group[data-collapse-color=nk-pink] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#E91E63'
  },
  'panel-group[data-collapse-color=nk-purple] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#9C27B0'
  },
  'panel-group[data-collapse-color=nk-indigo] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#3F51B5'
  },
  'panel-group[data-collapse-color=nk-blue] panel-collapse panel-headingactive panel-title>a:after': {
    'background': '#2196F3'
  },
  'notika-accrodion-cus panel-heading': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 25 }]
  },
  'panelnotika-accrodion-cus': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'notika-accrodion-cus panel-title>a': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'notika-accrodion-cus panel-body p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'popovers-pr-sg p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'accordion-stn panel-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'accordion-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'accordion-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'accordion-stn panel-body': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 26.  Tooltips CSS
/*----------------------------------------
  'tooltips-ctn h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'tooltips-static h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'popovers-sgn h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'popover-cl-pro popover popover-title': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'tooltip-inner': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'background': '#00c292'
  },
  'tooltipright tooltip-arrow': {
    'borderRightColor': '#00c292'
  },
  'tooltipbottom tooltip-arrow': {
    'borderBottomColor': '#00c292'
  },
  'tooltiptop tooltip-arrow': {
    'borderTopColor': '#00c292'
  },
  'tooltipleft tooltip-arrow': {
    'borderLeftColor': '#00c292'
  },
  'tooltipin': {
    'opacity': '1'
  },
  'tooltips-ctn a': {
    'color': '#00c292'
  },
  'tooltips-static btn-primary': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '3px',
    'outline': 'none',
    'color': '#fff',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'popover-cl-pro btn-primary': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '3px',
    'outline': 'none',
    'color': '#fff',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'tooltips-static btn-primary:hover': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'tooltips-static btn-primary:focus': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'tooltips-static btn-primary:active': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'popover-cl-pro btn-primary:hover': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'popover-cl-pro btn-primary:focus': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'popover-cl-pro btn-primary:active': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'outline': 'none'
  },
  'tooltips-static p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tooltips-ctn p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tooltips-static': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'tooltips-ctn': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'stc-tlt-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'tooltips-statictooltips-cvn': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tooltips-hdtooltips-hdn p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tooltips-hdtooltips-hdn': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 27.  Popovers CSS
/*----------------------------------------
  'popover-wp': {
    'background': '#ccc',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 190 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 190 }]
  },
  'popovers-pr-sg': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 325 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'position': 'relative',
    'borderRadius': '2px'
  },
  'popovers-pr-sg-mg-n': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'popovers-pr-sgtop>popover-arrow': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderTopColor': '#fff',
    'bottom': [{ 'unit': 'px', 'value': -11 }]
  },
  'popovers-pr-sgright>popover-arrow': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderRightColor': '#fff'
  },
  'popovers-pr-sgbottom>popover-arrow': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderBottomColor': '#fff',
    'top': [{ 'unit': 'px', 'value': -11 }]
  },
  'popovers-pr-sgleft>popover-arrow': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftColor': '#fff'
  },
  'popovers-pr-sg>popover-arrow': {
    'borderWidth': '11px'
  },
  'popovers-pr-sg>popover-arrow': {
    'position': 'absolute',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'popovers-pr-sg>popover-arrow:after': {
    'position': 'absolute',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'popovers-pr-sgright>popover-arrow:after': {
    'left': [{ 'unit': 'px', 'value': 1 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderRightColor': '#fff'
  },
  'popover-cl-pro popover': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'borderRadius': '2px',
    'fontFamily': ''Roboto', sans-serif',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'popover-cl-pro popover popover-title': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ebebeb' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'popover-cl-pro popover-content': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'popovers-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'popovers-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'popover-cl h5': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'popovers-pr-sg h5': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'popover-clpopover-ctn-mg h5': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 28.  Typography CSS
/*----------------------------------------
  'typography-list h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-heading h1': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#333'
  },
  'typography-hd-cr-2 h2': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'color': '#333'
  },
  'typography-hd-cr-1': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-3': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-4': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-6': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-3 h3': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#333'
  },
  'typography-hd-cr-4 h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'typography-hd-cr-5 h5': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'color': '#333'
  },
  'typography-hd-cr-6 h6': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tpgp-ele-tx h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tpgp-al-cl h3': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'tpgp-al-cl p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'abvi-act h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'abvi-act p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'cmp-int-box p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-hd-cr-1 p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'typography-mg-b-0': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'typography-hd-cr-6typography-mg-b-0 p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'text-left': {
    'textAlign': 'left'
  },
  'text-center': {
    'textAlign': 'center'
  },
  'text-right': {
    'textAlign': 'right'
  },
  'text-justify': {
    'textAlign': 'justify'
  },
  'text-nowrap': {
    'whiteSpace': 'nowrap'
  },
  'text-lowercase': {
    'textTransform': 'lowercase'
  },
  'text-uppercase': {
    'textTransform': 'uppercase'
  },
  'text-capitalize': {
    'textTransform': 'capitalize'
  },
  'abbr[title]': {
    'cursor': 'help',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }]
  },
  'tpgp-al-cl text-capitalize': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl blockquote-nk': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'color': '#333',
    'fontWeight': '700'
  },
  'tpgp-al-cl ultpdg-ul-circle': {
    'listStyleType': 'circle',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'tpgp-al-cl ultpdg-ul-circle-2': {
    'listStyleType': 'circle',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'tpgp-al-cl ultpdg-ul-circle li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl ultpdg-ul-circle-2 li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-orders li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'order-roman li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl ultpdg-ul-circle li:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl ultpdg-ul-circle-2 li:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tpgp-orders li:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'order-roman li:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl tpgp-ctm-angle li': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl tpgp-ctm-angle li:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tpgp-al-cl tpgp-ctm-angle li i': {
    'marginRight': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'blockquote-reverse': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'blockquotepull-right': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'abvi-mg-nk p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tpgp-ele-tx h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'tpgp-al-cl h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'abvi-act h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'typography-listtypography-mgn h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'typography-headingtypography-mgn mn-hd-s': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'typography-in-hdtypography-mgn mn-hd-s': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'tpgp-hp-hdtypography-mgn mn-hd-s': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  // ----------------------------------------
  // 29.  Contact CSS
/*----------------------------------------
  'contact-img img': {
    'borderRadius': '50%',
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'contact-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'contact-ctn ctn-ads': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#888',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-ad-hd': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'social-sn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'social-sn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'social-sn': {
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'social-st-list': {
    'display': 'flex'
  },
  'contact-win': {
    'display': 'flex'
  },
  'inbox-btn-st-ls': {
    'display': 'flex'
  },
  'view-mail-hd': {
    'display': 'flex'
  },
  'conct-sc-ic': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'conct-sc-ic a': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'background': '#00c292',
    'borderRadius': '50%',
    'color': '#fff',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'conct-sc-ic a:hover': {
    'color': '#fff'
  },
  'conct-sc-ic a:focus': {
    'color': '#fff'
  },
  'conct-sc-ic a:active': {
    'color': '#fff'
  },
  // ----------------------------------------
  // 30.  Inbox CSS
/*----------------------------------------
  'inbox-status ulinbox-st-navinbox-ft li:first-child': {
    'fontWeight': '700'
  },
  'inbox-status ulinbox-st-navinbox-ft li:first-child i': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'inbox-status ulinbox-st-nav li': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }]
  },
  'inbox-status ulinbox-st-nav li a': {
    'color': '#333',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'display': 'block'
  },
  'inbox-status ulinbox-st-nav li i': {
    'color': '#00c292',
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'inbox-status ulinbox-st-navinbox-nav-mg li:last-child': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'hr': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'search-input': {
    'position': 'relative'
  },
  'search-input search-ib': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 20 }],
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'outline': 'none'
  },
  'search-input search-ib:hover': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292',
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'search-input search-ib:focus': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292',
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'search-input search-ib:active': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': '#00c292',
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'search-input input[type="text"]': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'inbox-btn-st-ls inbox-nx': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'inbox-btn-st-lsbtn-toolbar btn-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-defaultnotika-gp-default:focus': {
    'borderRadius': '0px'
  },
  'btn-defaultnotika-gp-default:active': {
    'borderRadius': '0px'
  },
  'btn-defaultnotika-gp-default': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }]
  },
  'btn-defaultnotika-gp-default i': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'inbox-btn-st-ls notika-group-btn': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'tabletable-inbox>tbody>tr>td': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>tbody>tr>th': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>tfoot>tr>td': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>tfoot>tr>th': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>thead>tr>td': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>thead>tr>th': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'tabletable-inbox>tbody>tr>td a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'tabletable-hovertable-inbox': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'bt-df-checkbox': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'bt-df-checkbox radio-checked': {
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'icheckbox_square-greenchecked': {
    'backgroundPosition': '-44px 0'
  },
  'icheckbox_square-greencheckeddisabled': {
    'backgroundPosition': '-88px 0'
  },
  'iradio_square-green': {
    'backgroundPosition': '-109px 0'
  },
  'iradio_square-greenhover': {
    'backgroundPosition': '-131px 0'
  },
  'iradio_square-greenchecked': {
    'backgroundPosition': '-153px 0',
    'transition': 'all 0.3s ease 0s'
  },
  'iradio_square-greencheckeddisabled': {
    'backgroundPosition': '-197px 0'
  },
  'inline-checkbox-cs': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }]
  },
  'inline-checkbox-cs checkbox-inline': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'checkboxlogin-checkbox label': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'icheckbox_square-green': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 22 }],
    'height': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../img/green1.png) no-repeat',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer'
  },
  'iradio_square-green': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 22 }],
    'height': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../img/green1.png) no-repeat',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer'
  },
  'icheckbox_square-green': {
    'backgroundPosition': '0 0'
  },
  'icheckbox_square-greenhover': {
    'backgroundPosition': '-22px 0'
  },
  'icheckbox_square-greenchecked': {
    'backgroundPosition': '-44px 0',
    'transition': 'all 0.3s ease 0s'
  },
  'inbox-btn-st-ls': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'pagination-inbox ulwizard-nav-ac li i': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination-inbox ulwizard-nav-ac li a': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'background': '#ccc'
  },
  'pagination-inbox ulwizard-nav-ac li a:hover': {
    'color': '#fff !important'
  },
  'pagination-inbox ulwizard-nav-ac li a:activepagination-inbox ulwizard-nav-ac li a:focus': {
    'color': '#fff !important'
  },
  'pagination-inbox ulwizard-nav-ac liactive a': {
    'background': '#00c292'
  },
  'pagination-inbox': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'table-inbox label-warning': {
    'background': '#ab8ce4'
  },
  'table-inbox label-info': {
    'background': '#01c0c8'
  },
  'active-hook btn-default': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'active-hook btn-default:hover': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s',
    'outline': 'none'
  },
  'active-hook btn-default:active': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s',
    'outline': 'none'
  },
  'active-hook btn-default:focus': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'transition': 'all .4s ease 0s',
    'outline': 'none'
  },
  'btn-groupib-btn-gpactive-hooknk-act': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'active-hooknk-act button': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 10 }]
  },
  'active-hooknk-act i': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'inbox-text-list form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 31.  View Mail CSS
/*----------------------------------------
  'view-ml-rl': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'view-mail-hrd h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mail-ads p': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
  },
  'mail-ads': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'mail-ads a': {
    'color': '#00c292'
  },
  'view-mail-atn a': {
    'color': '#00c292'
  },
  'cmp-int-box a': {
    'color': '#00c292'
  },
  'view-mail-atn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'cmp-int-box h5': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'view-mail-atn': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '2px'
  },
  'view-mail-atn span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block'
  },
  'view-mail-atn vw-tr': {
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'dw-st-ic span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'cmp-int-box span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'dw-st-ic atc-sign': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'dw-atc-sn dw-al-ft': {
    'background': '#00c292',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 4 }],
    'left': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '2px'
  },
  'compose-ml btn': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'background': '#00c292',
    'color': '#fff',
    'borderRadius': '2px',
    'outline': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'compose-ml btn:focus': {
    'outline': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'compose-ml btn:active': {
    'outline': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'compose-ml btn:hover': {
    'outline': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'dw-atc-sn i': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'mail-adsmail-vw-ph first-ph': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'mail-adsmail-vw-ph last-ph': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 32.  Compose Mail CSS
/*----------------------------------------
  'cmp-int-in input[type="text"]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'outline': 'none',
    'borderRadius': '2px',
    'transition': 'all .4s ease 0s'
  },
  'cmp-int-in input[type="text"]:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'outline': 'none',
    'transition': 'all .4s ease 0s'
  },
  'cmp-int-lb span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'cmp-int-lbcmp-int-lb1 span': {
    'top': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': -10 }]
  },
  'cmp-int-box p': {
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'cmp-int-box note-editornote-frame': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'cmp-int-box note-editornote-frame:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }],
    'outline': 'none'
  },
  'multiupload-sys dropzonedropzone-custom': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'multiupload-sys i': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#333'
  },
  'multiupload-sys h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'form-groupcmp-em-mg': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 33.  Normal Table CSS
/*----------------------------------------
  'normal-table-list table': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tabletable-sc-ex>tbody>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-sc-ex>tbody>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-sc-ex>tfoot>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-sc-ex>tfoot>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-sc-ex>thead>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-sc-ex>thead>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>tbody>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>tbody>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>tfoot>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>tfoot>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>thead>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-bordered>thead>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'table-bordered': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>tbody>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>tbody>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>tfoot>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>tfoot>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>thead>tr>td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'table-bordered>thead>tr>th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }]
  },
  'tabletable-striped>tbody>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>tbody>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>tfoot>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>tfoot>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>thead>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>thead>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>tbody>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>tbody>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>tfoot>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>tfoot>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>thead>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-hover>thead>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-condensed>tbody>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-condensed>tbody>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-condensed>tfoot>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-condensed>tfoot>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-condensed>thead>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-condensed>thead>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'tabletable-cl>tbody>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-cl>tbody>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-cl>tfoot>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-cl>tfoot>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-cl>thead>tr>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-cl>thead>tr>th': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F5F5F5' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'tabletable-striped>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-sc-ex>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-bordered>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-hover>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-condensed>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-cl>thead>tr>th': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'tabletable-cl>tbody>tractive>td': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tractive>th': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>tdactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>thactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tractive>td': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tractive>th': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>tdactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>thactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>thead>tractive>td': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>thead>tractive>th': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>tdactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>thactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trinfo>td': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trinfo>th': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>tdinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>thinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trinfo>td': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trinfo>th': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>tdinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>thinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>thead>trinfo>td': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>thead>trinfo>th': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>tdinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>thinfo': {
    'background': '#fb9678',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trwarning>td': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trwarning>th': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>tdwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>thwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trwarning>td': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trwarning>th': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>tdwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>thwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>thead>trwarning>td': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>thead>trwarning>th': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>tdwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>thwarning': {
    'background': '#01c0c8',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trdanger>td': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trdanger>th': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>tddanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>thdanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trdanger>td': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trdanger>th': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>tddanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>thdanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>thead>trdanger>td': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>thead>trdanger>th': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>tddanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>thdanger': {
    'background': '#ab8ce4',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trsuccess>td': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tbody>trsuccess>th': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>tdsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tbody>tr>thsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trsuccess>td': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>trsuccess>th': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>tdsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>tfoot>tr>thsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>thead>trsuccess>td': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>thead>trsuccess>th': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>tdsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'tabletable-cl>thead>tr>thsuccess': {
    'background': '#e46a76',
    'color': '#fff'
  },
  'basic-tb-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'basic-tb-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'table>tbody>tr>td': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'table>tbody>tr>th': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'table>tfoot>tr>td': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'table>tfoot>tr>th': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'table>thead>tr>td': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'table>thead>tr>th': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  // ----------------------------------------
  // 34.  Data Table CSS
/*----------------------------------------
  'dataTables_filter': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_length': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_filter label': {
    'fontWeight': '400'
  },
  'dataTables_length label': {
    'fontWeight': '400'
  },
  'dataTables_length select': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'dataTables_filter input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'borderRadius': '2px',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'lineHeight': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#fff',
    'outline': 'none'
  },
  'dataTables_filter select': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'borderRadius': '2px',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'lineHeight': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#fff',
    'outline': 'none'
  },
  'dataTables_length input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'borderRadius': '2px',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'lineHeight': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#fff',
    'outline': 'none'
  },
  'dataTables_length select': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'borderRadius': '2px',
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'lineHeight': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#fff',
    'outline': 'none'
  },
  'dataTables_filter input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dataTables_filter select:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dataTables_length input:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dataTables_length select:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dataTables_length option:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dataTables_wrapper dataTables_filter': {
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'dataTables_wrapper dataTables_filter input': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'dataTables_wrapper dataTables_filter label': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'dataTables_filter label:after': {
    'content': ''\e928'',
    'fontFamily': ''notika-icon'',
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 8 }]
  },
  'dataTables_wrapper dataTables_filter input': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'dataTables_filter label': {
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonprevious:before': {
    'content': ''\e903''
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonnext:before': {
    'fontFamily': ''notika-icon'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonprevious:before': {
    'fontFamily': ''notika-icon'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonnext': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonprevious': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_wrapper dataTables_paginate paginate_buttonnext:before': {
    'content': ''\e91e''
  },
  'dataTables_wrapper dataTables_paginate paginate_buttoncurrent': {
    'background': '#00c292',
    'color': '#fff!important'
  },
  'dataTables_wrapper dataTables_paginate paginate_buttoncurrent:focus': {
    'background': '#00c292',
    'color': '#fff!important'
  },
  'dataTables_wrapper dataTables_paginate paginate_buttoncurrent:hover': {
    'background': '#00c292',
    'color': '#fff!important'
  },
  'dataTables_wrapper dataTables_paginate paginate_button': {
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'borderRadius': '50%',
    'backgroundColor': '#f1f1f1',
    'verticalAlign': 'top',
    'color': '#7E7E7E!important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 21 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }]
  },
  'dataTables_wrapper dataTables_paginate paginate_button:hover': {
    'color': 'white !important',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#00c292 !important'
  },
  'dataTables_wrapper dataTables_paginate paginate_button:focus': {
    'color': 'white !important',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#00c292 !important'
  },
  '#data-table-basic': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'dataTables_wrapper dataTables_info': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'dataTables_wrapper dataTables_paginate': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#data-table-basic_filter label': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#data-table-basic_length label': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 35.  Form Element CSS
/*----------------------------------------
  'nk-int-st input[type="text"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'resize': 'none',
    'borderRadius': '0px'
  },
  'nk-int-st textarea': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'resize': 'none',
    'borderRadius': '0px'
  },
  'nk-int-st [type="number"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'resize': 'none',
    'borderRadius': '0px'
  },
  'nk-int-st [type="password"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'resize': 'none',
    'borderRadius': '0px'
  },
  'nk-int-st textarea:active': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'nk-int-st textarea:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'nk-int-st textarea:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'nk-int-st [type="password"]:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'nk-int-st [type="password"]:active': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'nk-int-st': {
    'position': 'relative',
    'verticalAlign': 'top'
  },
  'nk-int-st:not([class*=has-]):after': {
    'background': '#00c292'
  },
  'nk-int-st:not(disabled):after': {
    'position': 'absolute',
    'zIndex': '3',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'content': '""',
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)',
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s'
  },
  'nk-int-st:not(readonly):after': {
    'position': 'absolute',
    'zIndex': '3',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'content': '""',
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)',
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.3s',
    'transitionDuration': '.3s'
  },
  'nk-int-st:not(form-group)': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'nk-int-stnk-toggled:after': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'floating-numner p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'floating-numnerfm-ele-mg p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'floating-numnerform-rlt-mg p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'float-lb nk-label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.2s',
    'transitionDuration': '.2s',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '400',
    'color': '#959595',
    'pointerEvents': 'none',
    'zIndex': '0',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'float-lb nk-toggled nk-label': {
    'top': [{ 'unit': 'px', 'value': -15 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'form-groupfloat-lb': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'form-groupfloat-lbfloating-lb': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'nk-int-st form-control[disabled]': {
    'backgroundColor': '#fff',
    'opacity': '1'
  },
  'nk-int-st form-control[readonly]': {
    'backgroundColor': '#fff',
    'opacity': '1'
  },
  'fieldset[disabled] form-control': {
    'backgroundColor': '#fff',
    'opacity': '1'
  },
  'fm-checkbox label': {
    'fontWeight': '400'
  },
  'fm-checkbox': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'iradio_square-green': {
    'backgroundPosition': '-109px 0'
  },
  'form-groupform-elet-mg': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'fm-checkboxform-elet-mg': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'fm-checkboxform-elet-mg label': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'textareaauto-size': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textRendering': 'auto',
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'wordWrap': 'normal'
  },
  'contact-hdsm-form-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-form-int': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  // ----------------------------------------
  // 36.  Form Components CSS
/*----------------------------------------
  'ic-cmp-int': {
    'position': 'relative',
    'display': 'table',
    'borderCollapse': 'separate'
  },
  'form-ic-cmp': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRadius': '0'
  },
  'form-ic-cmp': {
    'display': 'table-cell',
    'width': [{ 'unit': '%H', 'value': 0.01 }]
  },
  'form-ic-cmp i': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'color': '#333',
    'textAlign': 'center',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 7 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'cmp-tb-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'bcs-hd h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'cmp-tb-hd p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'cmp-tb-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'cmp-tb-hdcmp-int-hd h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'cmp-tb-hdair-mode-ctn p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'int-bg-it form-ic-cmp i': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': 20 }]
  },
  'nk-int-mk h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'fontWeight': '400'
  },
  'nk-int-mk p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'bootstrap-select selected check-mark': {
    'WebkitTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  'bootstrap-select check-mark': {
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'WebkitTransition': 'all',
    'OTransition': 'all',
    'transition': 'all',
    'WebkitTransitionDuration': '.2s',
    'transitionDuration': '.2s',
    'WebkitTransform': 'scale(0)',
    'MsTransform': 'scale(0)',
    'OTransform': 'scale(0)',
    'transform': 'scale(0)',
    'display': 'block!important',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 17 }],
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  'bootstrap-select>btn-default:before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'content': '""',
    'height': [{ 'unit': '%V', 'value': NaN }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundColor': '#FFF',
    'backgroundPosition': 'right calc(100% - 7px)',
    'backgroundRepeat': 'no-repeat',
    'backgroundImage': 'url(../images/select.png)',
    'pointerEvents': 'none',
    'zIndex': '5'
  },
  'bootstrap-select>btn-default': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '0px',
    'background': 'none !important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'outline': 'none !important'
  },
  'bootstrap-select>btn-default:active': {
    'outline': 'none !important'
  },
  'bootstrap-select>btn-default:hover': {
    'outline': 'none !important'
  },
  'bootstrap-select>btn-default:focus': {
    'outline': 'none !important'
  },
  'bootstrap-selectbtn-group dropdown-menu li a': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'bootstrap-selectbtn-group dropdown-menu': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'bootstrap-select dropdown-menu>active>a': {
    'backgroundColor': '#00c292'
  },
  'bootstrap-select dropdown-menu>active>a:focus': {
    'backgroundColor': '#00c292'
  },
  'bootstrap-select dropdown-menu>active>a:hover': {
    'backgroundColor': '#00c292'
  },
  'bootstrap-select bs-searchbox': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }],
    'position': 'relative',
    'background': '#F7F7F7',
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'bootstrap-select bs-searchbox:before': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'content': '"\e928"',
    'fontFamily': ''notika-icon' !important',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'bootstrap-select bs-searchbox input[type="text"]': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '0px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'backgroundImage': 'none !important',
    'background': '#F6F8FA'
  },
  'nk-int-mksl-dp-mn h2': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '700'
  },
  'bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(input-group-btn)': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'bootstrap-select notify': {
    'background': '#F44336 !important',
    'color': '#fff'
  },
  'bootstrap-select dropdown-menu': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'chosen-select-act chosen-container': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 2 }]
  },
  'chosen-select-act chosen-single': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'background': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'borderRadius': '0px'
  },
  'chosen-select-act chosen-container chosen-drop': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'chosen-select-act chosen-container-activechosen-with-drop chosen-single': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'backgroundImage': 'none'
  },
  'chosen-select-act chosen-container chosen-drop': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'chosen-select-act chosen-container chosen-results lihighlighted': {
    'background': '#00c292',
    'color': '#fff'
  },
  'chosen-select-act chosen-container chosen-results li': {
    'position': 'relative'
  },
  'chosen-select-act chosen-container chosen-results liresult-selected:before': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'chosen-select-act chosen-container chosen-results liresult-selected:before': {
    'content': '"\e906"',
    'fontFamily': ''notika-icon' !important',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'chosen-select-act chosen-container chosen-results li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'chosen-select-act chosen-container-single chosen-search': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': '!important' }],
    'background': '#F7F7F7'
  },
  'chosen-select-act chosen-container-single chosen-search': {
    'position': 'relative',
    'zIndex': '1010',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 4 }],
    'whiteSpace': 'nowrap'
  },
  'chosen-select-act chosen-container-single chosen-search:before': {
    'content': '"\e928"',
    'fontFamily': ''notika-icon' !important',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 3 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'chosen-select-act chosen-container-single chosen-search input[type="text"]': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'chosen-select-act chosen-container chosen-results lidisabled-result': {
    'color': '#ccc'
  },
  'chosen-select-act chosen-container-active chosen-choices': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'bootstrap-selectbtn-group no-results': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#fff'
  },
  'bootstrap-select dropdown-menu>li>a:focus': {
    'backgroundColor': '#00c292 !important',
    'color': '#fff !important'
  },
  'bootstrap-select dropdown-menu>li>a:hover': {
    'backgroundColor': '#00c292 !important',
    'color': '#fff !important'
  },
  'bootstrap-select dropdown-menu>li>a:active': {
    'backgroundColor': '#00c292 !important',
    'color': '#fff !important'
  },
  'chosen-select-act chosen-container-multi chosen-choices': {
    'backgroundImage': 'none',
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'chosen-select-act chosen-container-multi chosen-choices lisearch-choice': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '2px',
    'backgroundColor': '#00c292',
    'backgroundImage': 'none',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }]
  },
  'chosen-select-act chosen-container-multi chosen-choices lisearch-choice span': {
  },
  'chosen-container-multi chosen-choices lisearch-choice search-choice-close': {
    'width': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'background': 'url(../img/chosen-sprite.png) -38px 1px no-repeat',
    'display': 'inline-block',
    'textAlign': 'center',
    'color': '#333',
    'position': 'unset'
  },
  'chosen-container-multi chosen-choices lisearch-choice search-choice-close:hover': {
    'backgroundPosition': '-38px -10px',
    'color': '#fff !important'
  },
  'chosen-select-act': {
    'position': 'relative'
  },
  'chosen-select-act:before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -6 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'content': '""',
    'height': [{ 'unit': '%V', 'value': NaN }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'backgroundColor': '#FFF',
    'backgroundPosition': 'right calc(100% - 7px)',
    'backgroundRepeat': 'no-repeat',
    'backgroundImage': 'url(../images/select.png)',
    'pointerEvents': 'none',
    'zIndex': '5'
  },
  'chosen-container chosen-results ligroup-result': {
    'fontWeight': '600'
  },
  'nk-toggle-switch': {
    'display': 'inline-block',
    'verticalAlign': 'top',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'nk-toggle-switch ts-label': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'top',
    'WebkitTransition': 'color .56s cubic-bezier(.4,0,.2,1)',
    'transition': 'color .56s cubic-bezier(.4,0,.2,1)'
  },
  'nk-toggle-switch ts-helper': {
    'display': 'inline-block',
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '8px',
    'background': 'rgba(0,0,0,.26)',
    'WebkitTransition': 'background .28s cubic-bezier(.4,0,.2,1)',
    'transition': 'background .28s cubic-bezier(.4,0,.2,1)',
    'verticalAlign': 'middle',
    'cursor': 'pointer'
  },
  'nk-toggle-switch ts-helper:before': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': -4 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'background': '#fafafa',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }],
    'borderRadius': '50%',
    'webkitTransition': 'left .28s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1)',
    'transition': 'left .28s cubic-bezier(.4,0,.2,1),background .28s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1)'
  },
  'nk-toggle-switch:not(disabled) ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(128,128,128,.1)' }]
  },
  'nk-toggle-switch input': {
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': 'px', 'value': 46 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -4 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'opacity': '0',
    'filter': 'alpha(opacity=0)',
    'cursor': 'pointer'
  },
  'nk-toggle-switch input:checked+ts-helper:before': {
    'left': [{ 'unit': 'px', 'value': 20 }]
  },
  'nk-toggle-switch:not([data-ts-color]) input:not(:disabled):checked+ts-helper': {
    'background': '#22deb0'
  },
  'nk-toggle-switch:not([data-ts-color]) input:not(:disabled):checked+ts-helper:before': {
    'background': '#00c292'
  },
  'nk-toggle-switch:not([data-ts-color]) input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0,150,136,.2)' }]
  },
  'nk-toggle-switchdisabled': {
    'opacity': '.6',
    'filter': 'alpha(opacity=60)'
  },
  'nk-toggle-switch[data-ts-color=red] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(244,67,54,.5)'
  },
  'nk-toggle-switch[data-ts-color=red] input:not(:disabled):checked+ts-helper:before': {
    'background': '#F44336'
  },
  'nk-toggle-switch[data-ts-color=red] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(244,67,54,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=blue] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(33,150,243,.5)'
  },
  'nk-toggle-switch[data-ts-color=blue] input:not(:disabled):checked+ts-helper:before': {
    'background': '#2196F3'
  },
  'nk-toggle-switch[data-ts-color=blue] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(33,150,243,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=amber] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(255,193,7,.5)'
  },
  'nk-toggle-switch[data-ts-color=amber] input:not(:disabled):checked+ts-helper:before': {
    'background': '#FFC107'
  },
  'nk-toggle-switch[data-ts-color=amber] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(255,193,7,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=purple] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(186,104,200,.5)'
  },
  'nk-toggle-switch[data-ts-color=purple] input:not(:disabled):checked+ts-helper:before': {
    'background': '#BA68C8'
  },
  'nk-toggle-switch[data-ts-color=purple] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(186,104,200,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=pink] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(233,30,99,.5)'
  },
  'nk-toggle-switch[data-ts-color=pink] input:not(:disabled):checked+ts-helper:before': {
    'background': '#E91E63'
  },
  'nk-toggle-switch[data-ts-color=pink] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(233,30,99,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=lime] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(205,220,57,.5)'
  },
  'nk-toggle-switch[data-ts-color=lime] input:not(:disabled):checked+ts-helper:before': {
    'background': '#CDDC39'
  },
  'nk-toggle-switch[data-ts-color=lime] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(205,220,57,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=cyan] input:not(:disabled):checked+ts-helper': {
    'background': 'rgba(0,188,212,.5)'
  },
  'nk-toggle-switch[data-ts-color=cyan] input:not(:disabled):checked+ts-helper:before': {
    'background': '#00BCD4'
  },
  'nk-toggle-switch[data-ts-color=cyan] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0,188,212,.2)' }]
  },
  'nk-toggle-switch[data-ts-color=green] input:not(:disabled):checked+ts-helper': {
    'background': '#22deb0'
  },
  'nk-toggle-switch[data-ts-color=green] input:not(:disabled):checked+ts-helper:before': {
    'background': '#00c292'
  },
  'nk-toggle-switch[data-ts-color=green] input:not(:disabled):checked+ts-helper:active:before': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.28),0' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(76,175,80,.2)' }]
  },
  'nk-int-mksl-dp-mntg-dp-mn h2': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'toggle-select-act label': {
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'nk-toggle-switchdisabled': {
    'opacity': '.6',
    'filter': 'alpha(opacity=60)'
  },
  'spacer-b16a': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'nk-datapk-ctm label': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'nk-datapk-ctm input-group-addon': {
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'nk-datapk-ctm form-control': {
    'backgroundColor': '#fff',
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0px'
  },
  'nk-line form-control': {
    'backgroundColor': '#fff',
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0px'
  },
  'datepicker': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px'
  },
  'datepickerdropdown-menu': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'borderRadius': '0px',
    'color': '#333',
    'fontFamily': ''Roboto', sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'width': [{ 'unit': 'px', 'value': 300 }]
  },
  'datepicker-days table-condensed thead tr': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker-days table-condensed thead tr:first-child': {
    'height': [{ 'unit': 'px', 'value': 70 }]
  },
  'datepicker-days table-condensed thead tr:last-child': {
    'background': '#11cc9d',
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'datepicker-days table-condensed thead tr th:first-child': {
    'display': 'none'
  },
  'datepicker-days table-condensed tbody tr td:first-child': {
    'display': 'none'
  },
  'datepicker thead tr:first-child th:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker tfoot tr th:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:hover:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:hover:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:hover:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:hover:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:hover:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:hover:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactiveactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactive:hoveractive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabledactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr tdactivedisabled:hoveractive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr tdactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr tdactive:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr tdactivedisabled': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr tdactivedisabled:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker-dropdown:after': {
    'position': 'unset',
    'display': 'none'
  },
  'datepicker-dropdown:before': {
    'position': 'unset',
    'display': 'none'
  },
  'datepicker table tr td': {
    'borderRadius': '0px'
  },
  'datepicker table tr th': {
    'borderRadius': '0px'
  },
  'datepicker table': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': 'px', 'value': 380 }]
  },
  'datepickerdropdown-menu th': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'datepickerdropdown-menu td': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  'datepicker thdatepicker-switch': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'datepicker table tr td spanactive:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:hover:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:hover:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:hover:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:hover:focus': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:hover:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:hover:active': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactiveactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactive:hoveractive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabledactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker table tr td spanactivedisabled:hoveractive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr td spanactive': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr td spanactive:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr td spanactivedisabled': {
    'background': '#00c292',
    'color': '#fff'
  },
  'open dropdown-toggledatepicker table tr td spanactivedisabled:hover': {
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker-months table-condensed thead tr': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'background': '#00c292',
    'color': '#fff'
  },
  'datepicker-years table-condensed thead tr': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'background': '#00c292',
    'color': '#fff'
  },
  'datepickerdropdown-menu datepicker-months th': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 22 }]
  },
  'datepickerdropdown-menu datepicker-months td': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 22 }]
  },
  'nk-container ink-value': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'borderRadius': '2px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 15 }]
  },
  'nk-container>input-group inputnk-value': {
    'color': '#000!important',
    'background': '0 0!important'
  },
  'nk-line form-control': {
    'backgroundColor': '#fff',
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0px'
  },
  'nk-container input-group-addon': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'backgroundColor': '#fff'
  },
  'nk-container>input-group dropdown-menu': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'cmp-tb-hd label': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'note-editor fa': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'note-popover fa': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'summernote-clickable btn-primary': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable btn-success': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'modal-footer btn-primary': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable btn-primary:active': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable btn-primary:focus': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable btn-success:focus': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable btn-success:active': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'modal-footer btn-primary:focus': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'modal-footer btn-primary:active': {
    'background': '#00c292',
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'summernote-clickable': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'html-editor-click p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'note-editable p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'html-editor-airmodnote-air-editornote-editablepanel-body p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'html-editor-airmodnote-air-editornote-editablepanel-body': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'panel-headingnote-toolbar>btn-group': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'note-toolbarpanel-heading': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }]
  },
  'btn-group btn-default:hover': {
    'background': '#fff'
  },
  'note-editor': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'note-link-dialog modal-title': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'note-link-dialog form-group label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'note-link-dialog modal-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'note-link-dialog modal-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'contact-hddialog-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-hddialog-hd': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'note-link-dialog modal-dialog modal-content': {
    'borderRadius': '2px',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'dropzonedropzone-nk': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'dropzonedropzone-nk i': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'color': '#333'
  },
  'dropzonedropzone-nk h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'dropzonedropzone-nk p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333'
  },
  'dropzonedropzone-nk h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'themesaller-forms slider-group sliderv-wrapper': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'chosen-select-act chosen-container': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'nk-int-st input-group-addon': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cmp-tb-hdbsc-smp-sm': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-singlenk-int-stwidget-form textarea': {
    'height': [{ 'unit': 'px', 'value': 132 }]
  },
  // ----------------------------------------
  // 37.  Form examples CSS
/*----------------------------------------
  'form-example-int label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'form-example-int input[type="text"]': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'form-example-intform-horizental hrzn-fm': {
    'textAlign': 'right',
    'display': 'block'
  },
  'form-example-st form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-example-st fm-checkbox': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 38.  Login Register CSS
/*----------------------------------------
  'login-content': {
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'textAlign': 'center',
    'backgroundColor': '#00c292'
  },
  'error-page-area': {
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'textAlign': 'center',
    'backgroundColor': '#00c292'
  },
  'login-content:before': {
    'content': '''',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'error-page-area:before': {
    'content': '''',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'nk-block': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'error-page-wrap': {
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'nk-navigation a': {
    'verticalAlign': 'top',
    'display': 'inline-block'
  },
  'nk-navigation a i': {
    'verticalAlign': 'top',
    'display': 'inline-block'
  },
  'nk-block:not(toggled)': {
    'display': 'none'
  },
  'nk-blocktoggled': {
    'WebkitAnimationName': 'rollIn',
    'animationName': 'rollIn',
    'WebkitAnimationDuration': '.9s',
    'animationDuration': '.9s',
    'WebkitAnimationFillMode': 'both',
    'animationFillMode': 'both',
    'zIndex': '10'
  },
  'nk-block:not(lc-block-alt) nk-form': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }]
  },
  'nk-block:not(lc-block-alt) btn-login': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -50 }],
    'right': [{ 'unit': 'px', 'value': -25 }]
  },
  'nk-form': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'borderRadius': '2px'
  },
  'error-page-wrap': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.1)' }],
    'borderRadius': '2px'
  },
  'nk-navigation': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'nk-navigation a': {
    'WebkitTransition': 'width',
    'OTransition': 'width',
    'transition': 'width',
    'WebkitTransitionDuration': '.2s',
    'transitionDuration': '.2s'
  },
  'nk-navigation a span': {
    'WebkitTransition': 'width',
    'OTransition': 'width',
    'transition': 'width',
    'WebkitTransitionDuration': '.2s',
    'transitionDuration': '.2s'
  },
  'nk-navigation a': {
    'color': '#fff',
    'background': 'rgba(255,255,255,.2)',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '20px',
    'whiteSpace': 'nowrap',
    'textAlign': 'left'
  },
  'nk-navigation a i': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'fontStyle': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'nk-lg-ic notika-plus-symbol': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'nk-navigation a span': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 29 }],
    'marginLeft': [{ 'unit': 'px', 'value': -3 }]
  },
  'nk-navigation a:hover span': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'nk-navigation a[data-ma-block="#l-register"]:hover': {
    'width': [{ 'unit': 'px', 'value': 95 }]
  },
  'nk-navigation a[data-ma-block="#l-forget-password"]:hover': {
    'width': [{ 'unit': 'px', 'value': 147 }]
  },
  'nk-navigation a[data-ma-block="#l-login"]:hover': {
    'width': [{ 'unit': 'px', 'value': 85 }]
  },
  'lc-block-alt nk-form': {
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 35 }]
  },
  'lc-block-alt btn-login': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -25 }]
  },
  'lcb-user': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -35 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -50 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.18)' }]
  },
  'input-group-addonnk-ic-st-pro': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'nk-block fm-checkbox': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 41 }],
    'textAlign': 'left'
  },
  'btn-float': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '50%',
    'lineHeight': [{ 'unit': 'px', 'value': 46 }]
  },
  'btn-float:not(m-btn)': {
    'position': 'absolute!important'
  },
  'btn-loginbtn-float i': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'btn-float:not(bgm-white):not(bgm-gray)>i': {
    'color': '#fff'
  },
  'btn-loginbtn-success': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-cropper-pro btn': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-action-pro btn': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'notika-todo-btn btn': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-add-todo': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-chat-btn': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-loginbtn-success:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-loginbtn-success:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-loginbtn-success:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-cropper-pro btn:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-cropper-pro btn:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-cropper-pro btn:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-action-pro btn:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-action-pro btn:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'images-action-pro btn:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'notika-todo-btn btn:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'notika-todo-btn btn:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'notika-todo-btn btn:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-add-todo:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-add-todo:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-add-todo:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-chat-btn:hover': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-chat-btn:focus': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btnnotika-chat-btn:active': {
    'backgroundColor': '#00c292',
    'borderColor': '#00c292',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'rg-ic-stl notika-right-arrow': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'nk-block': {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  'login-content:before': {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  'error-page-wrap': {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  'error-page-area:before': {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  'nk-form p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  // ----------------------------------------
  // 39.  Invoice CSS
/*----------------------------------------
  'invoice-img': {
    'background': '#00c292',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  'ivc-frm': {
    'textAlign': 'right'
  },
  'ivc-to': {
    'textAlign': 'left'
  },
  'invoice-frm span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'comp-tl p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'cmp-ph-em span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'invoice-hs span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'invoice-ds-int p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'comp-tl h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'invoice-hs h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'comp-tl p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'comp-tl': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'invoice-hds-pro': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'invoice-hs': {
    'background': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 30 }]
  },
  'invoice-hs span': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'color': '#fff'
  },
  'invoice-hs h2': {
    'color': '#fff'
  },
  'date-inv': {
    'background': '#2196F3'
  },
  'wt-inv': {
    'background': '#4CAF50'
  },
  'gdt-inv': {
    'background': '#F44336'
  },
  'invoice-sp table': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'invoice-sp': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'invoice-ds-int h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'invoice-print': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 70 }],
    'right': [{ 'unit': 'px', 'value': 70 }],
    'zIndex': '99'
  },
  'invoice-print btn': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'background': '#00c292',
    'color': '#fff',
    'borderRadius': '50%',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }]
  },
  'invoice-print i': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'invoice-ds-int p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'invoice-ds-int': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'invoice-ds-intinvoice-last': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 40.  404 CSS
/*----------------------------------------
  'error-page-wrap': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'error-page-wrap h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'error-page-wrap p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'error-page-wrap btn': {
    'background': '#00c292',
    'color': '#fff',
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }],
    'outline': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'error-page-wrap counter': {
    'color': '#00c292'
  },
  'error-page-wrap i': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': '#00c292',
    'paddingBottom': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }],
    'display': 'block'
  },
  // ----------------------------------------
  // 41.  Default Layout CSS
/*----------------------------------------
  'default-layout-dv': {
    'height': [{ 'unit': 'px', 'value': 510 }]
  },
  'menu-layout-dv': {
    'height': [{ 'unit': 'px', 'value': 510 }]
  },
  // ----------------------------------------
  // 42.  Menu Hover Layout CSS
/*----------------------------------------
  'main-menu-lv-int': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }]
  },
  'main-menu-lv-int ulmain-menu-lv': {
    'textAlign': 'center'
  },
  'main-menu-lv-int ulmain-menu-lv > li': {
    'display': 'inline-block',
    'position': 'relative'
  },
  'main-menu-lv-int ulmain-menu-lv > li > a': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lv > li i': {
    'marginRight': [{ 'unit': 'px', 'value': 3 }]
  },
  'main-menu-lv-int ulmain-menu-lv > li:hover > a': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lv li ulmenu-dp-lt': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.1)' }],
    'zIndex': '9',
    'opacity': '0',
    'visibility': 'hidden',
    'transition': 'all .4s ease 0s',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'main-menu-lv-int ulmain-menu-lv li:hover ulmenu-dp-lt': {
    'zIndex': '9',
    'opacity': '1',
    'visibility': 'visible',
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lv li ulmenu-dp-lt li a': {
    'display': 'block',
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'color': '#333',
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lv li:hover ulmenu-dp-lt li a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lv li ulmenu-dp-lt li a:hover': {
    'color': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }],
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lveffect-tran-mn li ulmenu-dp-lt': {
    'top': [{ 'unit': '%V', 'value': 1.3 }],
    'transition': 'all .4s ease 0s'
  },
  'main-menu-lv-int ulmain-menu-lveffect-tran-mn li:hover ulmenu-dp-lt': {
    'top': [{ 'unit': '%V', 'value': 1 }],
    'transition': 'all .4s ease 0s'
  },
  // ----------------------------------------
  // 43.  Map CSS
/*----------------------------------------
  'google-map-single': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }]
  },
  '#map2': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  '#googleMap': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  '#map86': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  '#map7': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // ----------------------------------------
  // 44. Image Cropper CSS
/*----------------------------------------
  'maincrop-img': {
    'display': 'flex'
  },
  'img-preview-custom': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 280 }],
    'overflow': 'hidden',
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'image-crp-img': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'image-crp-int h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'image-crp-img h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'cp-img-anal h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'images-action-pro btn': {
    'color': '#fff'
  },
  'nk-cd-ed-wp cm-s-ambiance CodeMirror-gutters': {
    'background': '#00c292'
  },
  // ----------------------------------------
  // 45. Bar Chart CSS
/*----------------------------------------
  '#dynamic-chart': {
    'height': [{ 'unit': 'px', 'value': 279 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  '#bar-chart': {
    'height': [{ 'unit': 'px', 'value': 279 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'chat-inputbar form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'todo-inputbar form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#dynamic-chartflot-chartwidget-dynamic-chart': {
    'height': [{ 'unit': 'px', 'value': 319 }]
  },
  '#bar-chartflot-chartbar-threebar-hm-three': {
    'height': [{ 'unit': 'px', 'value': 308 }]
  },
  '#dynamic-chartflot-chartdyn-ctn-frbar-hm-three': {
    'height': [{ 'unit': 'px', 'value': 308 }]
  },
  '#bar-chartflot-chartflot-chr-pro': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#dynamic-chartflot-chartflot-chr-pro': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 46. overwriting CSS
/*----------------------------------------
  'contact-mapwidget-contact-map': {
    'height': [{ 'unit': 'px', 'value': 187 }]
  },
  'contact-listwidget-contact-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }]
  },
  'contact-dt ulcontact-listwidget-contact-list': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'contact-hdwidget-ctn-hd p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-singlewidget-form input[type="text"]:focus': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'form-singlewidget-form': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form input[type="email"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cmp-email-over input[type="email"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form input[type="number"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cmp-email-over input[type="text"]': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form textarea': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '0px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form input[type="email"]:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cmp-email-over input[type="email"]:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form input[type="number"]:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cmp-email-over input[type="text"]:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'widget-form textarea:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'btn-groupnk-email-inbox btn-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'btn-groupnk-email-inbox btn-default:hover': {
    'background': '#00c292',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00c292' }]
  },
  'cmp-int-box note-popover popover popover-content>btn-group': {
    'marginRight': [{ 'unit': 'px', 'value': 2 }]
  },
  'cmp-int-box panel-headingnote-toolbar>btn-group': {
    'marginRight': [{ 'unit': 'px', 'value': 2 }]
  },
  'note-editablepanel-body h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333'
  },
  'note-editablepanel-body vw-tr': {
    'display': 'block'
  },
  'cmp-int-box note-editor note-editing-area note-editable': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'todo-flex': {
    'display': 'flex'
  },
  'btnnotika-add-todo': {
    'borderRadius': '0px',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 25 }]
  },
  'btnnotika-chat-btn': {
    'borderRadius': '0px',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 25 }]
  },
  'chosen-container-single chosen-search input[type="text"]': {
    'background': 'white url(../img/chosen-sprite.png) no-repeat 100% -20px',
    'background': 'url(../img/chosen-sprite.png) no-repeat 100% -45px'
  },
  'modal-footer btn-primary[disabled]:focus': {
    'background': '#00c292'
  },
  'modal-footer btn-primary[disabled]:hover': {
    'background': '#00c292'
  },
  'menu-it-icon-pro i': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginRight': [{ 'unit': 'px', 'value': 3 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }]
  },
  'menu-it-icon-promn-ic-cl i': {
    'color': '#00c292'
  },
  // ----------------------------------------
  // 47. Sidebar Left CSS
/*----------------------------------------
  'left-sidebar-pro': {
    'zIndex': '9999',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'WebkitBoxShadow': '20px 0 20px -20px #d3d7e9',
    'MozBoxShadow': '20px 0 20px -20px #d3d7e9',
    'boxShadow': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': -20 }, { 'unit': 'string', 'value': '#d3d7e9' }],
    'transition': 'all 0.3s ease 0s'
  },
  'sidebar-navleft-sidebar-menu-pro ul': {
    'background': '#fff'
  },
  '#sidebar': {
    'minWidth': [{ 'unit': 'px', 'value': 200 }],
    'background': '#fff',
    'color': '#fff',
    'position': 'fixed',
    'transition': 'all 0.3s ease 0s',
    'zIndex': '999',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitBoxShadow': '20px 0 20px -20px #d3d7e9',
    'MozBoxShadow': '20px 0 20px -20px #d3d7e9',
    'boxShadow': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': -20 }, { 'unit': 'string', 'value': '#d3d7e9' }],
    'top': [{ 'unit': 'px', 'value': 50 }]
  },
  '#sidebar sidebar-header': {
    'background': '#fff'
  },
  'sidebar-header': {
    'textAlign': 'center'
  },
  'sidebar-nav': {
    'background': '#fff'
  },
  'sidebar-nav metismenu': {
    'background': '#fff'
  },
  'sidebar-user-profile': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }],
    'background': '#f5f5f5',
    'position': 'relative',
    'zIndex': '99'
  },
  'sidebar-user-profile mn-us-pro': {
    'display': 'none'
  },
  'sidebar-user-profile sd-user-profile': {
    'borderRadius': '50%'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu a:hover': {
    'color': '#fff',
    'background': '#00c292'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu a:focus': {
    'color': '#fff',
    'background': '#00c292'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu a:active': {
    'color': '#fff',
    'background': '#00c292'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu li a:hover icon-wrap': {
    'color': '#fff'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu li a:focus icon-wrap': {
    'color': '#fff'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu li a:active icon-wrap': {
    'color': '#fff'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu li icon-wrap': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 3 }]
  },
  'sidebar-navleft-sidebar-menu-pro ulmetismenu li ulsubmenu-angle li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'sidebar-user-profile h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'profile-action': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'profile-action ulpro-action-mn li': {
    'display': 'inline-block',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  'profile-action ulpro-action-mn li:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  'profile-action ulpro-action-mn li a': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'transition': 'all .4s ease 0s'
  },
  'profile-action ulpro-action-mn li a:hover': {
    'color': '#00c292',
    'transition': 'all .4s ease 0s'
  },
  'sidebar-navleft-sidebar-menu-pro metismenu has-arrow:after': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'all-content-wrapper': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }],
    'transition': 'all 0.3s ease 0s'
  },
  'rtl-layoutmini-navbar all-content-wrapper': {
    'marginRight': [{ 'unit': 'px', 'value': 80 }]
  },
  'comment-scrollbar': {
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'comment-scrollbar mCSB_outside+mCSB_scrollTools': {
    'right': [{ 'unit': 'px', 'value': -2 }],
    'top': [{ 'unit': 'px', 'value': 5 }]
  },
  'menu-switcher-pro': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#31b191' }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }]
  },
  'menu-switcher-pro btnbar-button-pro': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': 3 }]
  },
  'menu-switcher-pro btnbar-button-pro:hover': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'menu-switcher-pro btnbar-button-pro:focus': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'menu-switcher-pro btnbar-button-pro:active': {
    'background': '#00c292',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  '#sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 80 }],
    'maxWidth': [{ 'unit': 'px', 'value': 80 }],
    'textAlign': 'center',
    'transition': 'all 0.3s ease 0s'
  },
  '#sidebaractive sidebar-user-profile': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }]
  },
  '#sidebaractive sidebar-user-profile h2': {
    'display': 'none'
  },
  '#sidebaractive profile-action ulpro-action-mn li:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  '#sidebaractive profile-action ulpro-action-mn li': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  '#sidebaractive sidebar-nav ulmetismenu li ulsubmenu-angle': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -180 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left',
    'width': [{ 'unit': 'px', 'value': 180 }],
    'background': '#fff',
    'WebkitBoxShadow': '0 1px 1px rgba(0,0,0,.175)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.175)' }]
  },
  '#sidebaractive mCustomScrollBox': {
    'overflow': 'unset'
  },
  '#sidebaractive mCSB_container': {
    'overflow': 'unset'
  },
  '#sidebaractive comment-scrollbar': {
    'height': [{ 'unit': 'px', 'value': 238 }]
  },
  '#sidebaractive sidebar-nav ulmetismenu li ulsubmenu-anglenotification-mini-nb-dp': {
    'top': [{ 'unit': 'px', 'value': -270 }]
  },
  '#sidebaractive sidebar-nav ulmetismenu li ulsubmenu-anglepages-mini-nb-dp': {
    'top': [{ 'unit': 'px', 'value': -150 }]
  },
  'mini-navbar all-content-wrapper': {
    'marginLeft': [{ 'unit': 'px', 'value': 80 }],
    'transition': 'all 0.3s ease 0s'
  },
  '#sidebaractive metismenu li submenu-angle li a': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }]
  },
  '#sidebaractive mCSB_scrollTools': {
    'height': [{ 'unit': 'px', 'value': 370 }]
  },
  // ----------------------------------------
  // 48. Small sidebar CSS
/*----------------------------------------
  'left-sidebar-prosmall-sidebar-df': {
    'width': [{ 'unit': 'px', 'value': 180 }]
  },
  'left-sidebar-prosmall-sidebar-df #sidebar': {
    'minWidth': [{ 'unit': 'px', 'value': 180 }]
  },
  'left-sidebar-prosmall-sidebar-df #sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 80 }]
  },
  'all-content-wrappersmall-ctn-wp': {
    'marginLeft': [{ 'unit': 'px', 'value': 180 }]
  },
  'mini-navbar all-content-wrappersmall-ctn-wp': {
    'marginLeft': [{ 'unit': 'px', 'value': 80 }]
  },
  // ----------------------------------------
  // 49. large sidebar CSS
/*----------------------------------------
  'left-sidebar-prolarge-sidebar-df': {
    'width': [{ 'unit': 'px', 'value': 220 }]
  },
  'left-sidebar-prolarge-sidebar-df #sidebar': {
    'minWidth': [{ 'unit': 'px', 'value': 220 }]
  },
  'left-sidebar-prolarge-sidebar-df #sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 80 }]
  },
  'all-content-wrapperlarge-ctn-wp': {
    'marginLeft': [{ 'unit': 'px', 'value': 220 }]
  },
  'mini-navbar all-content-wrapperlarge-ctn-wp': {
    'marginLeft': [{ 'unit': 'px', 'value': 80 }]
  },
  // ----------------------------------------
  // 50. Mini sidebar CSS
/*----------------------------------------
  'left-sidebar-promini-sidebar-ld': {
    'width': [{ 'unit': 'px', 'value': 80 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar': {
    'minWidth': [{ 'unit': 'px', 'value': 80 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 200 }]
  },
  'left-sidebar-promini-sidebar-ld mini-click-non': {
    'display': 'none'
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive mini-click-non': {
    'display': 'inline-block'
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-angle': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -180 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left',
    'width': [{ 'unit': 'px', 'value': 180 }],
    'WebkitBoxShadow': '0 1px 1px rgba(0,0,0,.175)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.175)' }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-anglemini-layout-one': {
    'top': [{ 'unit': 'px', 'value': -315 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-anglemini-layout-two': {
    'top': [{ 'unit': 'px', 'value': -100 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-anglemini-layout-three': {
    'top': [{ 'unit': 'px', 'value': -50 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-anglemini-layout-four': {
    'top': [{ 'unit': 'px', 'value': -450 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar sidebar-nav ulmetismenu li ulsubmenu-anglemini-layout-five': {
    'top': [{ 'unit': 'px', 'value': -270 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive sidebar-nav ulmetismenu li ulsubmenu-angle': {
    'position': 'unset',
    'right': [{ 'unit': 'px', 'value': -180 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar mCSB_container': {
    'overflow': 'unset'
  },
  'left-sidebar-promini-sidebar-ld #sidebar mCustomScrollBox': {
    'overflow': 'unset'
  },
  'left-sidebar-promini-sidebar-ld sidebar-navleft-sidebar-menu-pro metismenu has-arrow:after': {
    'display': 'none'
  },
  'left-sidebar-promini-sidebar-ld sidebar-user-profile h2': {
    'display': 'none'
  },
  'left-sidebar-promini-sidebar-ld profile-action ulpro-action-mn li:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  'left-sidebar-promini-sidebar-ld profile-action ulpro-action-mn li': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'left-sidebar-promini-sidebar-ld sidebar-user-profile': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'zIndex': '9'
  },
  'left-sidebar-promini-sidebar-ld sidebar-nav metismenu a': {
    'textAlign': 'center'
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive sidebar-nav metismenu a': {
    'textAlign': 'left'
  },
  'left-sidebar-promini-sidebar-ld sidebar-navleft-sidebar-menu-pro ulmetismenu li ulsubmenu-angle li a': {
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive comment-scrollbar': {
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebar comment-scrollbar': {
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive sidebar-navleft-sidebar-menu-pro metismenu has-arrow:after': {
    'display': 'block'
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive sidebar-user-profile h2': {
    'display': 'block'
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive profile-action ulpro-action-mn li': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'left-sidebar-promini-sidebar-ld #sidebaractive sidebar-navleft-sidebar-menu-pro ulmetismenu li ulsubmenu-angle li a': {
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 40 }],
    'position': 'relative',
    'display': 'block'
  },
  'all-content-wrappermini-sidebar-ctn': {
    'marginLeft': [{ 'unit': 'px', 'value': 80 }]
  },
  'mini-navbar all-content-wrappermini-sidebar-ctn': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }]
  },
  'box-layoutmini-navbar menu-switcher-pro': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  // ----------------------------------------
  // 51. Logo Center Layout CSS
/*----------------------------------------
  'menu-switcher-prologo-ctn-sf': {
    'marginRight': [{ 'unit': 'px', 'value': 38 }]
  },
  'logo-areald-lg-ctn': {
    'textAlign': 'center'
  },
  // ----------------------------------------
  // 52. Header Fixed Layout CSS
/*----------------------------------------
  'default-layout-dvheader-fixed-bd-hd': {
    'height': [{ 'unit': 'px', 'value': 600 }]
  },
  'header-top-areadark-header': {
    'background': '#232b32'
  },
  'footer-copyright-areadark-footer': {
    'background': '#232b32'
  },
  'header-top-areadark-header menu-switcher-pro btnbar-button-pro': {
    'background': '#232b32'
  },
  'header-top-areadark-header menu-switcher-pro': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#363c3a' }]
  },
  'header-top-areadark-header navnotika-top-nav>li>a:focus': {
    'background': '#232b32'
  },
  'header-top-areadark-header navnotika-top-nav>li>a:hover': {
    'background': '#232b32'
  },
  'header-top-areadark-header navnotika-top-nav>li>a:active': {
    'background': '#232b32'
  },
  'header-top-areadark-header navnotika-top-nav open>a': {
    'background': '#232b32'
  },
  'header-top-areadark-header navnotika-top-nav open>a:focus': {
    'background': '#232b32'
  },
  'header-top-areadark-header navnotika-top-nav open>a:hover': {
    'background': '#232b32'
  },
  // ----------------------------------------
  // 53. Dark Sidebar Layout CSS
/*----------------------------------------
  'dark-sidebar-ld sidebar-user-profile': {
    'background': '#232b32'
  },
  'dark-sidebar-ld sidebar-navleft-sidebar-menu-pro ul': {
    'background': '#232b32'
  },
  'dark-sidebar-ld sidebar-navleft-sidebar-menu-pro ul': {
    'background': '#2e3841'
  },
  'dark-sidebar-ld #sidebaractive sidebar-nav ulmetismenu li ulsubmenu-angle': {
    'background': '#2e3841'
  },
  'dark-sidebar-ld #sidebar': {
    'background': '#2e3841'
  },
  'dark-sidebar-ld sidebar-user-profile h2': {
    'color': '#fff'
  },
  'dark-sidebar-ld profile-action ulpro-action-mn li a': {
    'color': '#fff'
  },
  'dark-sidebar-ld profile-action ulpro-action-mn li:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3c3f48' }]
  },
  'dark-sidebar-ld profile-action ulpro-action-mn li': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3c3f48' }]
  },
  'dark-sidebar-ld sidebar-nav metismenu a': {
    'color': '#fff'
  },
  'dark-sidebar-ld sidebar-nav metismenu li icon-wrap': {
    'color': '#fff'
  },
  // ----------------------------------------
  // 54. Box Layout CSS
/*----------------------------------------
  'bodybox-layout': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 1200 }],
    'background': '#000000 !important'
  },
  'box-layout-wp-bg': {
    'background': '#F6F8FA'
  },
  'logo-arealogo-left': {
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -24 }]
  },
  // ----------------------------------------
  // 55. offcanvas CSS
/*----------------------------------------
  'offcanvas #sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': 'px', 'value': -410 }]
  },
  'offcanvasmini-navbar all-content-wrapper': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  // ----------------------------------------
  // 56. Fullscreen Layout CSS
/*----------------------------------------
  'fullscreen all-content-wrapper': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'fullscreen #sidebar': {
    'marginLeft': [{ 'unit': 'px', 'value': -410 }]
  },
  'fullscreen #sidebaractive': {
    'minWidth': [{ 'unit': 'px', 'value': 200 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'fullscreen #sidebaractive sidebar-user-profile h2': {
    'display': 'block'
  },
  'fullscreen #sidebaractive profile-action ulpro-action-mn li': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  'fullscreen #sidebaractive profile-action ulpro-action-mn li:first-child': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e7f2' }]
  },
  'fullscreen #sidebaractive metismenu li mini-click-non': {
    'display': 'inline-block'
  },
  'fullscreen sidebar-nav metismenu a': {
    'textAlign': 'left'
  },
  'fullscreenmini-navbar all-content-wrapper': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }]
  },
  'fullscreen #sidebaractive mCSB_container': {
    'overflow': 'hidden'
  },
  'fullscreen #sidebaractive sidebar-nav ulmetismenu li ulsubmenu-angle': {
    'position': 'unset',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'fullscreen #sidebaractive metismenu li submenu-angle li a': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 40 }]
  },
  'fullscreen #sidebaractive metismenu has-arrow:after': {
    'display': 'block',
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'em', 'value': 0.5 }],
    'height': [{ 'unit': 'em', 'value': 0.5 }],
    'borderWidth': '1px 0 0 1px',
    'borderStyle': 'solid',
    'borderColor': 'initial',
    'right': [{ 'unit': 'em', 'value': 1 }],
    'WebkitTransform': 'rotate(-45deg) translateY(-50%)',
    'MsTransform': 'rotate(-45deg) translateY(-50%)',
    'OTransform': 'rotate(-45deg) translateY(-50%)',
    'transform': 'rotate(-45deg) translateY(-50%)',
    'WebkitTransformOrigin': 'top',
    'MsTransformOrigin': 'top',
    'OTransformOrigin': 'top',
    'transformOrigin': 'top',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'WebkitTransition': 'all .3s ease-out',
    'OTransition': 'all .3s ease-out',
    'transition': 'all .3s ease-out'
  },
  // ----------------------------------------
  // 57. Breadcomb CSS
/*----------------------------------------
  'breadcomb-area': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'breadcomb-wp': {
    'display': 'flex'
  },
  'breadcomb-icon i': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#00c292',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'position': 'relative',
    'borderRadius': '50%',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'display': 'block'
  },
  'breadcomb-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff'
  },
  'breadcomb-ctn': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'breadcomb-ctn h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#333'
  },
  'breadcomb-ctn p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#333',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'breadcomb-report': {
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'right'
  },
  'breadcomb-report btn': {
    'background': '#00c292',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '3px',
    'outline': 'none'
  },
  'breadcomb-report btn:focus': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'breadcomb-report btn:active': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'breadcomb-report btn:hover': {
    'background': '#00c292',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  '#sidebaractive sidebar-nav ulmetismenu li ulsubmenu-anglelayout-mini-tl': {
    'top': [{ 'unit': 'px', 'value': -322 }]
  },
  // ----------------------------------------
  // 58. Notika Icon CSS
/*----------------------------------------
  'notika-icon-pro a': {
    'textAlign': 'center',
    'background': '#F6F8FA',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'notika-icon-pro i': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'color': '#333',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }]
  },
  // ----------------------------------------
  // 59. Notika custom scrollbar CSS
/*----------------------------------------
  'mCS-light-1mCSB_scrollTools mCSB_dragger mCSB_dragger_bar': {
    'backgroundColor': '#00c292'
  },
  'mCS-light-1mCSB_scrollTools mCSB_draggerRail': {
    'backgroundColor': '#ccc'
  }
});
