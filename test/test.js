/**
 * 이벤트
 */

// 키워드 인풋 키업 이벤트
$('.keyword__input').on('keyup', function(event) {
    var enter    = event.keyCode === 13;
    var spacebar = event.keyCode === 32;
    
    $(this).val(checkChar($(this).val()));
    var tagTxt = $(this).val();

    // 빈값 확인
    if (checkNull()) return;
    
    // 키워드 추가
    if (enter || spacebar) {
        addKeyword(tagTxt);
        $(this).val('');
    }
});

// 키워드 인풋 키다운 이벤트
$('.keyword__input').on('keydown', function (event) {
    var backspace = event.keyCode === 8;

    // 키워드 삭제
    if (backspace) {
        if (!checkNull()) return;
           removeKeyword();
        return false;
    }
});

// 나의 태그 클릭 이벤트
$('.my-tag__item').on('click', function() {
    var tagTxt = $(this).text();

    addKeyword(tagTxt);
});

/**
 * 추가 && 삭제
 */

// 키워드 추가
function addKeyword(tagTxt) {
    var keyword = '';
        keyword += '<li class="keyword__item">';
        keyword += '    <span class="keyword">' + tagTxt + '</span>';
        keyword += '</li>';

    $('.keyword__input-wrap').before(keyword);
}

// 키워드 삭제
function removeKeyword() {
    $('.keyword__input-wrap').prev('.keyword__item').remove();
}

/**
 * 확인
 */

// 키워드 빈값 체크
function checkNull() {
    var val    = $('.keyword__input').val();
    var isNull = val.length === 0 || val === '';

    return isNull;
}

// 키워드 정규표현식
function checkChar(value) {
    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"\s]/gi;
    return value.replace(regExp, '');
}