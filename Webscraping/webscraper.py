from gettext import find
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager
import time
import re

# IMDB Api zahteva registracijo -> ni časa, zato Web scraping

def find_element():
    el = "titleColumn"
    element = driver.find_elements_by_class_name(el)
    element = element[0].get_attribute('innerHTML')
    print(element)

driver = webdriver.Chrome(ChromeDriverManager().install())

products=[] #List to store name of the product
prices=[] #List to store price of the product
ratings=[] #List to store rating of the product
driver.get("https://www.imdb.com/chart/top/?ref_=nv_mv_250")


find_element()