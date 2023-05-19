import requests

def check_url(url):
    try:
        response = requests.get(url)
        return response.status_code
    except requests.exceptions.RequestException as err:
        return f"An error occurred: {err}"

# Test the function
print(check_url("http://example.com"))
