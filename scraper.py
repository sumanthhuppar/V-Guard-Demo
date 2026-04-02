import urllib.request
import re
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

products = [
  'V-Guard Divino DG 15L Storage Water Heater',
  'V-Guard Pebble Shine 25L Water Heater',
  'V-Guard Victo Plus 6L Instant Geyser',
  'V-Guard Glado 400 1200mm Ceiling Fan',
  'V-Guard DERA Deco 1200mm Premium Fan',
  'V-Guard Ecowind BLDC Energy Saver Fan',
  'V-Guard VG Crystal Plus 4KVA Stabilizer',
  'V-Guard VND 400 Digital Stabilizer',
  'V-Guard Mini Crystal Supreme Stabilizer',
  'V-Guard Zenora RO+UV+MB Water Purifier',
  'V-Guard Rejive RO Water Purifier',
  'V-Guard Ignite 750W Mixer Grinder',
  'V-Guard Induction Cooktop VIC-15',
  'V-Guard Spray Steam Iron IRS-02',
  'V-Guard Rice Cooker 1.8L',
  'V-Guard Sinewave Inverter 850VA',
  'V-Guard Inverter Battery 150Ah Tubular',
  'V-Guard Self Priming Pump 1HP',
  'V-Guard Submersible Pump VAS-30',
  'V-Guard Desert Air Cooler 55L',
  'V-Guard Solar Water Heater 200LPD',
  'V-Guard Modular Switch 6 Module Kit'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for p in products:
    try:
        url = 'https://www.bing.com/images/search?q=' + urllib.parse.quote(p + ' product white background')
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, context=ctx, timeout=5).read().decode('utf-8')
        
        match = re.search(r'murl&quot;:&quot;(http[^&]+(?:jpg|png|webp))&quot;', html)
        if match:
            print(f'{p} -> {match.group(1)}')
        else:
            print(f'{p} -> Not Found')
    except Exception as e:
        print(f'{p} -> Error: {e}')
