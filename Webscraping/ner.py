import spacy
import json
from spacy import displacy

NER = spacy.load("en_core_web_sm")
 
file = open('../movies.json')

jsondata = json.load(file)

for data in jsondata:
    new_text = data['synopsis']
    entities = NER(data['synopsis'])
    for word in entities.ents:
        if(word.label_ == 'PERSON'):
            new_text = new_text.replace(word.text, word.label_)
    print(new_text)

