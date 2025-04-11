const {test, request, expect} = require ('@playwright/test')

test.describe('SuccessAddLaporan', ()=>{
    let APIContext;

    test.beforeAll(async()=>{
         APIContext = await request.newContext({
            baseURL: 'https://lapor.folkatech.com/api/report',
            extraHTTPHeaders: {
              'Content-Type': 'application/json',
              'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGFwb3IuZm9sa2F0ZWNoLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTc0NDM4OTU0MSwiZXhwIjoxNzQ0MzkzMTQxLCJuYmYiOjE3NDQzODk1NDEsImp0aSI6IlBmaE5yVkl2bjFVM0Z2WmciLCJzdWIiOjYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.7gdADfo-bziOG1sranMf4s2bGtnWh2UC65y8OKGvQZM',
        
        }
        })
    })
    test('Success Send New Laporan', async () => {
      const response = await APIContext.post('https://lapor.folkatech.com/api/report', {
        data: {
          
          "id": 9107,
          "user_id": 16,
          "report_category_id": 3,
          "description": "Ini Tes Lagi pls",
          "attachment_image": null,
          "attachment_video": null,
          "tracking_id": "TK-250318-00647",
          "lat": "1",
          "lng": "1",
          "address_location": "Disini",
          "stat_progress": "open",
          "created_at": "2025-04-11T15:23:41.000000Z",
          "updated_at": "2025-03-18T15:05:37.000000Z",
          "fullname": "BANA",
          "province_id": 1,
          "gender": "P",
          "tipe_korban": "php",
          "urgency": "rendah",
          "uuid": "5f339276-f500-4df8-a982-dfe7e78fdf74",
          "oca_uuid": "1",
          "province": {
              "id": 1,
              "name": "Jawa Barat"
          },
          "report_category": {
              "id": 1,
              "name": "Category A",
              "icon": "https://lapor.folkatech.com/storage/icons/20230801140826.png"
        }
      }
      });
      console.log(await response.json());
    });

    test('Failed Send New Laporan', async () => {
      const response = await APIContext.post('https://lapor.folkatech.com/api/report', {
        data: {
          
      nama: 'Pengguna Tanpa Kategori',
      provinsi: 'Jawa Barat',
      urgensi: 'Tinggi',
      isi: 'Laporan tanpa kategori'
          },
         
      })
      console.log(await response.json());
    });
     
    });

