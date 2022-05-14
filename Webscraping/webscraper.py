from gettext import find
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager
import time
import re

# IMDB Api zahteva registracijo -> ni časa, zato Web scraping

def find_element(index):
    el = "//table/tbody/tr[" + str(index) + "]/td[2]"
    element = driver.find_element_by_xpath(el)
    element = element.get_attribute('innerHTML')
    print(re.findall('\d*\,?\d+', element)[0])

driver = webdriver.Chrome("../chromedriver.exe")

products=[] #List to store name of the product
prices=[] #List to store price of the product
ratings=[] #List to store rating of the product
driver.get("")

find_element(17) #VT
find_element(20) #Z

