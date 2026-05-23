from django import template
import json

register = template.Library()

@register.simple_tag
def aurbient_organization_schema():
    schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Aurbient Technology",
        "url": "https://www.aurbient.com",
        "logo": "https://www.aurbient.com/static/images/logo.png",
        "description": "AI technology consulting agency specializing in cutting-edge artificial intelligence solutions",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indore",
            "addressRegion": "Indore",
            "postalCode": "452001",
            "addressCountry": "India"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Contact",
            "email": "aurbient@gmail.com",
            "telephone": "+91-9131248819"
        },
        "sameAs": [
            "https://www.linkedin.com/company/aurbient/ ",
            "https://www.instagram.com/aurbient_tc?igsh=cDFxbHo3YWRmeXJl"
        ]
    }
    return json.dumps(schema, indent=2)

@register.simple_tag
def ai_consulting_service_schema():
    schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Technology Consulting",
        "provider": {
            "@type": "Organization",
            "name": "Aurbient Technology"
        },
        "description": "Comprehensive AI consulting services including strategy development, implementation, and optimization of artificial intelligence solutions for your business.",
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "37.7749",
                "longitude": "-122.4194"
            },
            "geoRadius": "500000"
        },
        "offers": {
            "@type": "Offer",
            "price": "Varies",
            "priceCurrency": "USD"
        }
    }
    return json.dumps(schema, indent=2)