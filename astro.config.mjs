// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Guvendekal.org',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/GuvendeKal/guvendekal.org/tree/main' }],
        sidebar: [
            {
                label: 'Nedir',
                items: [
                    { label: 'Başlangıç', link: '/guides/baslangic' },
                    { label: 'Mahremiyet', link: '/guides/mahremiyet' },
                    { label: 'Güvenlik', link: '/guides/guvenlik' },
                    { label: 'Sözlük', link: '/guides/sozluk' },
                    { label: 'Tor Ağı', link: '/guides/tor-agi' },
                ],
            },
            {
                label: 'Sağlayıcılar',
                items: [
                    { label: 'VPN Servisleri', link: '/guides/vpn' },
                    { label: 'DNS Servisleri', link: '/guides/dns' },
                    { label: 'Arama Motorları', link: '/guides/arama-motorlari' },
                    { label: 'İnternet Tarayıcıları', link: '/guides/internet-tarayicilari' },
                    { label: 'E-posta Servisleri', link: '/guides/posta-servisleri' },
                    { label: 'Uygulama Mağazaları', link: '/guides/uygulama-magazalari' },
                ],
            },
            {
                label: 'Güvenlik',
                items: [
                    { label: 'Şifre Yöneticisi', link: '/guides/sifre-yoneticileri' },
                    { label: '2 Faktörlü Doğrulama', link: '/guides/2-faktorlu-dogrulama' },
                    { label: 'E-posta Maskeleme', link: '/guides/posta-maskeleme' },
                    { label: 'İnternet Araçları', link: '/guides/internet-araclari' },
                    { label: 'Tarayıcı Eklentileri', link: '/guides/tarayici-eklentileri' },
                ],
            },
            {
                label: 'Uygulamalar',
                items: [
                    { label: 'Mesajlaşma Uygulamaları', link: '/guides/mesajlasma-uygulamalari' },
                    { label: 'Ofis Uygulamaları', link: '/guides/ofis-uygulamalari' },
                    { label: 'Sosyal Medya', link: '/guides/sosyal-medya' },
                    { label: 'Yapay Zeka', link: '/guides/yapay-zeka' },
                    { label: 'Not Alma', link: '/guides/not-alma' },
                    { label: 'E-posta İstemcileri', link: '/guides/posta-istemcileri' },
                    { label: 'Torrent İstemcileri', link: '/guides/torrent-istemcileri' },
                    { label: 'Haritalar', link: '/guides/haritalar' },
                    { label: 'Takvim Uygulamaları', link: '/guides/takvim-uygulamalari' },
                    { label: 'RSS Okuyucuları', link: '/guides/rss-istemcileri' },
                    { label: 'Senkronizasyon', link: '/guides/senkronizasyon' },
                    { label: 'Çeviri Araçları', link: '/guides/ceviri-araclari' },
                    { label: 'İndirme Yöneticileri', link: '/guides/indirme-yoneticileri' },
                    { label: 'Yazılım Kaldırma Araçları', link: '/guides/yazilim-kaldirma-araclari' },
                    { label: 'QR Kod Araçları', link: '/guides/qr-kod-araclari' },
                ],
            },
            {
                label: 'Dosya',
                items: [
                    { label: 'Dosya Depolama', link: '/guides/dosya-depolama' },
                    { label: 'Dosya Aktarma', link: '/guides/dosya-aktarma' },
                    { label: 'Dosya Sıkıştırma', link: '/guides/dosya-sikistirma' },
                    { label: 'Dosya Şifreleme', link: '/guides/dosya-sifreleme' },
                    { label: 'Dosya Dönüştürme', link: '/guides/dosya-donusturme' },
                ],
            },
            {
                label: 'İşletim Sistemleri',
                items: [
                    { label: 'İşletim Sistemleri', link: '/guides/isletim-sistemleri' },
                    { label: 'Android Güvenliği', link: '/guides/android-guvenligi' },
                    { label: 'Windows Güvenliği', link: '/guides/windows-guvenligi' },
                ],
            },
            {
                label: 'Finans',
                items: [
                    { label: 'Kripto Paralar', link: '/guides/kripto-paralar' },
                    { label: 'Kripto Cüzdanlar', link: '/guides/kripto-cuzdanlari' },
                ],
            },
            {
                label: 'Diğerleri',
                items: [
                    { label: 'Alternatif Ağlar', link: '/guides/alternatif-aglar' },
                    { label: 'Modem Yazılımları', link: '/guides/modem-yazilimlari' },
                ],
            },
            {
                label: 'Dokümantasyon',
                items: [
                    { label: 'Kriterler', link: '/guides/kriterler' },
                    { label: 'Katkıda Bulunanlar', link: '/guides/katkida-bulunanlar' },
                    { label: 'İçerik Kuralları', link: '/guides/icerik-kurallari' },
                    { label: 'Ekleme Yapmak', link: '/guides/ekleme' },
                    { label: 'Biçimlendirme', link: '/guides/bicimlendirme' },
                ],
            },
        ],
		}), keystatic(), react()],
});