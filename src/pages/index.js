import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeTab, setActiveTab] = useState('royal-search');
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('/api/seo-engine')
      .then((res) => res.json())
      .then((data) => setBackendData(data))
      .catch((err) => console.log('API Error:', err));
  }, []);

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Tahoma, sans-serif', background: '#090d16', color: '#f1f5f9', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>رویال سرچ | موتور هوشمند داده‌کاوی و سئو خودکار</title>
      </Head>

      <header style={{ borderBottom: '1px solid #1e293b', paddingBottom: '15px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '22px', color: '#38bdf8', margin: 0 }}>🔍 رویال سرچ (استارتاپ فناورانه رویال فام)</h1>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: '5px 0' }}>
          مدیرعامل و مالک: امیر سام یعقوبی | تلفن: ۰۹۳۶۶۶۸۱۹۶۳ | ایمیل: amirsamyaghobi62@gmail.com
        </p>
        
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
          <button onClick={() => setActiveTab('royal-search')} style={{ background: activeTab === 'royal-search' ? '#0284c7' : '#1e293b', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            موتور رویال سرچ (۱۰۰k کلمه)
          </button>
          <button onClick={() => setActiveTab('betisa')} style={{ background: activeTab === 'betisa' ? '#db2777' : '#1e293b', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            سالن بتی‌سا (تهران)
          </button>
          <button onClick={() => setActiveTab('asnaf')} style={{ background: activeTab === 'asnaf' ? '#10b981' : '#1e293b', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            اصناف و توکن رایگان
          </button>
        </div>
      </header>

      <div style={{ background: '#1e293b', padding: '10px 15px', borderRadius: '6px', marginBottom: '20px', fontSize: '13px' }}>
        وضعیت ارتباط با بک‌اند API: <strong style={{ color: '#4ade80' }}>{backendData ? backendData.engine : 'در حال اتصال...'}</strong>
      </div>

      <main>
        {activeTab === 'royal-search' && (
          <section style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#38bdf8', fontSize: '18px' }}>موتور داده‌کاوی و سئو خودکار ۲۴/۷</h2>
            <p>پایش سراسری ۳۱ استان و کلان‌شهرها، تحلیل بلادرنگ با هوش مصنوعی روی بیش از ۱۰۰,۰۰۰ کلمه کلیدی.</p>
          </section>
        )}

        {activeTab === 'betisa' && (
          <section style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#db2777', fontSize: '18px' }}>سالن زیبایی بتی‌سا (۲۲ منطقه تهران)</h2>
            <p>مدیر مجموعه: خانم بیتا قناعتی | تلفن تماس و لید: <strong>۰۹۱۲۵۱۵۴۰۲۴</strong></p>
            <p>بررسی بیش از ۵۰ رقیب در مناطق ۲۲ گانه تهران و سئو خودکار تخصصی.</p>
          </section>
        )}

        {activeTab === 'asnaf' && (
          <section style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#10b981', fontSize: '18px' }}>سامانه جامع اصناف و اعطای توکن رایگان</h2>
            <p>اعطای ۱۰ توکن رایگان برای راه‌اندازی صفحات و سایت‌های اختصاصی اصناف متصل به شبکه سراسری.</p>
          </section>
        )}
      </main>

      <footer style={{ marginTop: '40px', borderTop: '1px solid #1e293b', paddingTop: '15px', textAlign: 'center', fontSize: '11px', color: '#94a3b8', lineHeight: '1.8' }}>
        <p>تمامی حقوق این سامانه متعلق به <strong>استارتاپ فناورانه هوش مصنوعی رویال فام (رویال سرچ)</strong> (امیر سام یعقوبی) می‌باشد.</p>
        <p style={{ color: '#f87171', fontWeight: 'bold' }}>هرگونه کپی‌برداری از کدهای ساختار و فکری معنوی مالک استارتاپ پیگیری حقوقی و قضایی دارد.</p>
      </footer>
    </div>
  );
}
