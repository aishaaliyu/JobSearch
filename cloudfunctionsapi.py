#
#
# main() will be invoked when you Run This Action.
#
# @param Cloud Functions actions accept a single parameter,
#        which must be a JSON object.
#
# @return which must be a JSON object.
#         It will be the output of this action.
#
# Return Job Search based on user's passed Keyword
#

import sys, requests, json

'''
    Function for retrieving sample job data response from github using the 
    GitHub raw api.
'''
def make_api_call(search):
    url = "https://raw.githubusercontent.com/aadenira/CloudTutorial/master/data/response.json"
    response = requests.request("GET", url)
    json_response = json.loads(response.text)
    keys_found = json_response.keys()
    clean_search = "".join(search.split()).lower()
    if(clean_search not in keys_found):
        return json_response["any"] if "any" in json_response else {"jobs": []}
    else:
        return json_response[clean_search]
    
def main(dict):
    response = {"jobs": []}
    if 'keywords' in dict:
        response = make_api_call(dict['keywords'])
    return response
