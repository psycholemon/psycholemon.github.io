import webbrowser

url = 'https://www.google.com'
password = "LEMONS4LIFE"
input = input("What is the password?")
if password == input:
    print("Password is valid")
else:
  webbrowser.open_new_tab(url)
    
