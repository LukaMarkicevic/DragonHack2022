import spacy
import json
from spacy import displacy

NER = spacy.load("en_core_web_sm")
 
def entity_names(file):

    data_array = []
    for data in file:
        synopsis = data['overview'].replace('\n', '').replace('-', ',')
        entities = NER(synopsis)
        for word in entities.ents:
            if(word.label_ == 'PERSON'):
                synopsis = synopsis.replace(word.text, word.label_)
        data_array.append(synopsis)

    return data_array