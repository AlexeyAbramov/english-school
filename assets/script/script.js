$(document).ready(function(){
    $('#form__subscribe').on('submit',function(e){
        e.preventDefault();                         // отключаем стандартную отправку формы
    })
    $('#modal__close').click(function(){
        $('#lesson__modal').css('display','none');
    })
    $('#subscribe').click(function(){
        $('#lesson__modal').css('display','block');
    })
    $(this).click(function(e){
        e.target.id === 'lesson__modal' ? $('#lesson__modal').css('display','none') : null;  // убираем модальное окно, если клик вне его области
    })
})