var rule = {
    title: '爱欧乐影院',
    host: 'https://www.iole.cc',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/page/fypage/wd/**.html',
    class_parse: '.top_nav li:gt(0);a&&Text;a&&href;.*/(\\d+).html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.cbox_list;*;*;*;*;*',
    double: true,
    一级: 'ul.vodlist li;a&&title;a&&data-original;.pic_text&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.video-info-aux&&Text',
        img: '.lazy.lazyload&&data-src',
        desc: '.video-info-items:eq(-2)&&Text;.video-info-items:eq(-1)&&Text;.video-info-items:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item&&Text;.video-info-items:eq(0)&&.video-info-item&&Text',
        content: '.video-info-content&&Text',
        tabs: '.module-tab-item',
        lists: '.module-play-list:eq(#id) a',
    },
    搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
