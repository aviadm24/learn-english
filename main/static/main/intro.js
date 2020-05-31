


$(function(){
    var LessonWords;
    var currentWord=0;
//    $.get("http://127.0.0.1:8000/static/xml/TARGETW.xml", {}, function (xml){
    console.log("target url: "+ static_url)
    $.get(static_url+"xml/TARGETW.xml", {}, function (xml){
        var xml_node = $('Words',xml);
//        console.log(xml_node);
        var dstLang = 'Eng';
        var srcLang = 'Heb';
        var EngWords = xml_node.find('Eng');
        var HebWords = xml_node.find('Heb');
        var PosEngWords = xml_node.find('PartOfSpeechEng');
        var PosHebWords = xml_node.find('PartOfSpeechHeb');
        var EngInHeb = xml_node.find('EngInHeb');
        var LessonWords = [];
        for (var j=0; j<EngWords.length; j++){
            var word = {
              dstLang: EngWords[j].innerHTML,
              srcLang: HebWords[j].innerHTML,
              "PartOfSpeechEng": PosEngWords[j].innerHTML,
              "PartOfSpeechHeb": PosHebWords[j].innerHTML,
              "EngInHeb": EngInHeb[j].innerHTML
            };
            LessonWords.push(word);

        }

        var html = "";
        for (var i = 0; i < LessonWords.length;  i++)
        {
            console.log(LessonWords[i].dstLang)
            word =
            html += "<div class='col' id='word" + i + "' onclick='ShowWord(" + i + ")'>" + LessonWords[i].dstLang + "</div>";
        }
        $("#WordsList").html(html);

        $("#NextButton").click(function(){
            if (currentWord == LessonWords.length-1) { currentWord = -1}
            ShowWord(LessonWords, currentWord+=1); //(currentWord+1)%LessonWords.length
        });

        $("#PrevButton").click(function(){
            if (currentWord == 0){ currentWord = LessonWords.length-1} else {currentWord -= 1}
            ShowWord(LessonWords, currentWord); //(currentWord+LessonWords.length-1)%LessonWords.length
        });
        //console.log(LessonWords)
        ShowWord(LessonWords, currentWord);


      });

});
 
function ShowWord(LessonWords, index)
{
    console.log("index: "+index)
	var word = LessonWords[index];
	
	currentWord = index;	
	 
	$("#DestWord").text(word.dstLang);
	$("#SourceWord").text(word.srcLang);
	$("#Transcription").text(word.EngInHeb);
	$("#PartOfSpeechDest").text(word.PartOfSpeechEng);
	$("#PartOfSpeechSrc").text(word.PartOfSpeechHeb);

	$("#WordsList div").removeClass("active");
	$("#WordsList #word" + index).addClass("active");
	
}


function sort(propertyRetriever, arr) {
    arr.sort(function (a, b) {
        var valueA = propertyRetriever(a);
        var valueB = propertyRetriever(b);

        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
}

