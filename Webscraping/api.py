import requests
import json
import os
import openai
import ner
import re
#import ner

dict = {}
openai.api_key = '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'

API_KEY = '35568b82a9c89c2f0045f4ebc7c4ab86'
result_popular = requests.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY +'&language=en-US&page=4')

popular = json.loads(result_popular.text)
synopsis = ner.entity_names(popular['results'])

dict = {}

for i in range(len(popular['results'])):
    id = popular['results'][i]['id']
    
    result_details = requests.get('https://api.themoviedb.org/3/movie/' + str(id) +'?api_key=' + API_KEY + '&language=en-US')
    details = json.loads(result_details.text)    
    
    title = popular['results'][i]['original_title']
    overview = popular['results'][i]['overview']

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="Extract keywords from this text:" + overview + "",
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.8,
        presence_penalty=0.0
    )

    tagline = details['tagline']
    keywords = response['choices'][0].text

    dict[title] = {}
    dict[title]["overview"] = synopsis[i].replace('\n', '').replace('-', ',')
    dict[title]["tagline"] = tagline.replace('\n', '')
    dict[title]["keywords"] = keywords.replace('\n', '')

    with open('movies.json', 'w') as f:
        json.dump(dict, f, indent=2)




