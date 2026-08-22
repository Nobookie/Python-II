import secrets
# Option 1: Hexadecimal string (64 characters, 32 bytes) - Recommended for FastAPI
print('FastAPI: '+secrets.token_hex(32)) 

# Option 2: URL-safe Base64 string - Recommended for Django / Flask
print('Django / Flask: '+secrets.token_urlsafe(32))