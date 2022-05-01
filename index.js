function introduction(name){
    return `Hi, my name is ${name}.`;
}
introduction('Jesse');
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Jesse", "Javascript");

introduction('Jesse');
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Jesse", "Javascript");