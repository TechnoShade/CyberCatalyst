# password_checker.py

def password_strength(password):
    """Check the strength of a password."""
    if len(password) < 8:
        return "Password is too short."
    if not any(char.isdigit() for char in password):
        return "Password should contain at least one digit."
    if not any(char.isupper() for char in password):
        return "Password should contain at least one uppercase letter."
    if not any(char.islower() for char in password):
        return "Password should contain at least one lowercase letter."
    return "Password is strong."

password = input("Enter a password to test: ")
print(password_strength(password))
