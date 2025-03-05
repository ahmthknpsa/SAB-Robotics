import requests  
import time  
from datetime import datetime  
import urllib3  

# HTTPS uyarılarını devre dışı bırak
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


backend_url = "https://localhost:44315/"

def send_patch_request(url, post_data):
    """Veri ile PATCH isteği gönderir"""
    try:
        # POST verisi ile PATCH isteği gönderiyoruz
        response = requests.patch(url, json=post_data, verify=False)
        
        # Başarılı işlem durum kodları (200 veya 204) kontrol edilir
        if response.status_code in [200, 204]:
            print(f"Veri başarıyla {url} adresine gönderildi!")  
        else:
            # Eğer işlem başarısız olursa, hata durumu yazdırılır
            print(f"Veriyi {url} adresine gönderme başarısız. Durum kodu: {response.status_code}")
            print(response.text)  
    except Exception as e:
        
        print(f"Bir hata oluştu: {e}")

# Görev güncellemesi yapan fonksiyon
def update_mission(no_value, new_mission):
    url = f"{backend_url}api/UgvRobot/update-mission/{no_value}"  # API endpoint'i(urlsi)
    data = {"newMission": new_mission}  
    send_patch_request(url, data)  # PATCH isteğini göndeririz

# İlaç miktarını güncelleyen fonksiyon
def update_herbicide(no_value, new_herbicide):
    url = f"{backend_url}api/UgvRobot/update-herbicide/{no_value}"
    data = {"newHerbicide": new_herbicide}  
    send_patch_request(url, data)

# Mesafeyi güncelleyen fonksiyon
def update_distance(no_value, new_distance):
    url = f"{backend_url}api/UgvRobot/update-distance/{no_value}"
    data = {"newDistance": new_distance}  
    send_patch_request(url, data)

# Hız bilgisini güncelleyen fonksiyon
def update_speed(no_value, new_speed):
    url = f"{backend_url}api/UgvRobot/update-speed/{no_value}"
    data = {"newSpeed": new_speed}  
    send_patch_request(url, data)

# Bilgi tarihi güncelleyen fonksiyon
def update_info_date(no_value, new_info_date):
    url = f"{backend_url}api/UgvRobot/update-info-date/{no_value}"
    data = {
        "newInfoDate": new_info_date,  
        "request": "valid_request"  # Gerekli olan ek 'request' alanını da ekleriz
    }
    send_patch_request(url, data)

# Konum bilgisini güncelleyen fonksiyon
def update_location(no_value, car_loc, car_lat, car_long):
    url = f"{backend_url}api/UgvRobot/update-location/{no_value}"
    data = {
        "carLoc": car_loc,  
        "carLat": car_lat,  
        "carLong": car_long  
    }
    send_patch_request(url, data)

# Geçerli tarih ve saati ISO 8601 formatında döndüren fonksiyon
def get_current_formatted_datetime():
    """Şu anki tarihi ve saati ISO 8601 formatında döndürür"""
    now = datetime.now()  
    return now.strftime("%Y-%m-%dT%H:%M:%S")  


while True:
    no_value = "0"  # Gerçek 'no' değeri ile değiştirin (Bu değer, robot numarasını veya kimliğini temsil eder)

   
    update_mission(no_value, "Yeni görev")  
    update_herbicide(no_value, 120.5)  
    update_distance(no_value, 150.0)  
    update_info_date(no_value, get_current_formatted_datetime())  
    update_location(no_value, "Yeni Lokasyon", 37.7749, -122.4194)  
    update_speed(no_value, 88)  

    
    time.sleep(60)
