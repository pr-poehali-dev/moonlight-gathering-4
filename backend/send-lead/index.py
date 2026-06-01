import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет её на почту агентства."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    raw_body = event.get('body', '{}')
    body = json.loads(raw_body) if isinstance(raw_body, str) else raw_body
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Name and phone are required'}
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    from_email = 'vashdom30@yandex.ru'
    to_email = 'vashdom30@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px;">
            Новая заявка с сайта «Ваш дом»
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; font-weight: bold; color: #666; width: 120px;">Имя:</td>
                <td style="padding: 10px; color: #1a1a1a;">{name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
                <td style="padding: 10px; font-weight: bold; color: #666;">Телефон:</td>
                <td style="padding: 10px; color: #1a1a1a;">
                    <a href="tel:{phone}" style="color: #1a1a1a;">{phone}</a>
                </td>
            </tr>
            {"" if not message else f'''
            <tr>
                <td style="padding: 10px; font-weight: bold; color: #666;">Сообщение:</td>
                <td style="padding: 10px; color: #1a1a1a;">{message}</td>
            </tr>
            '''}
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Агентство недвижимости «Ваш дом» — автоматическое уведомление
        </p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True}
    }