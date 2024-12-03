import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCertificate from '@UserCertificatePageComponents/UserCertificate';
import cabinetService from '@/services/cabinet.service';
import { IUserCertificateWithDetails } from '@/types/userCertificateWithDetails.types';
import { useDynamicId } from '@/hooks';

const UserCertificatePage: FC = () => {
  const [certificate, setCertificate] =
    useState<IUserCertificateWithDetails | null>({
      gift: {
        id: 1,
        name: 'Сертифікат 200 грн від мережі Фокстрот',
        use_conditions: '',
        get_conditions: '',
        price: 100,
        discount: null,
        images: [
          {
            image: 'local/gaaqcard2020200-2-2.png',
          },
        ],
        banner: null,
        partner: {
          name: 'Фокстрот',
          logo: '/partner/0/1_112701.png',
        },
      },
      certificate: {
        certificate_code: 'sadsdsgfg',
        created_at: 1730806014,
        sent_at: null,
        gift: {
          id: 1,
          name: 'Сертифікат 200 грн від мережі Фокстрот',
          use_conditions: '',
          get_conditions: '',
          price: 100,
          discount: null,
          images: [
            {
              image: 'local/gaaqcard2020200-2-2.png',
            },
          ],
          banner: null,
          partner: {
            name: 'Фокстрот',
            logo: '/partner/0/1_112701.png',
          },
        },
        pdf_url: 'TODO/blablabla/$id=1',
      },
      code: {
        id: 12,
        code: 'NCTWRPKMZX6F',
        created_at: 1730818526,
        shop_number: 7,
        wheel_status: null,
        status: 1,
        action_id: 1,
      },
      action: {
        id: 1,
        name: 'Моршинська акція',
        logo: 'local/am9enlogo-artnation-loyaltywhite-1-1.png',
        logo_partner: 'local/w5iyylogo.png',
        date_from: 1728000000,
        date_to: 1730332800,
        action_type: 3,
        conditions_text: 'Умови акції 1\r\nУмови акції 2\r\nУмови акції 3',
        main_banner_dt: 'local/bwq2ycomponent-2-2-min.png',
        main_banner_mob: 'local/o5yqlcomponent-2-2.png',
        second_banner_dt: 'local/xzvvscomponent-2-2-min.png',
        second_banner_mob: 'local/udezncomponent-2-2.png',
        third_banner_mob: 'local/t5xl2component-2-2-min.png',
        third_banner_dt: null,
        hot_line_phone: '0-800-500-415',
        hot_line_email: 'info@atb-dreamhouse.com',
        hot_line_text: 'Приймаємо дзвінки цілодобово і безкоштовно',
        hot_line_text_2:
          'Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу лінію за телефоном:',
        hot_line_work_hours: '',
        coverage_type: 'base',
        rules: 'Інші умови акції 1\r\nІнші умови акції 2\r\nІнші умови акції 3',
        rules_pdf: 'local/8jx3shosting7464115.pdf',
        legal_text:
          '<p><strong>Юридичний текст</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\nАкція проводиться виключно в мережі магазинів ТОВ «АТБ-Маркет» на території України, в тому числі в інтернет-магазині ТОВ «АТБ-Маркет» за посиланням https://atbmarket.com., \r\nза винятком тимчасово окупованих територій та зон проведення бойових дій. Детальні умови Акції - на сайті https://atbmarket.com/actions',
      },
      expired_date: '2025-01-01',
      certificate_pdf: '/todo/file.pdf',
    });
  const certificateId = useDynamicId();

  useEffect(() => {
    const getUserCertificateDetails = async (id: string): Promise<void> => {
      const data = await cabinetService.getCertificateDetails(id);

      setCertificate(data);
    };

    certificateId && getUserCertificateDetails(certificateId);
  }, [certificateId]);

  return (
    <Section>
      <Container>
        {certificate && <UserCertificate certificate={certificate} />}
      </Container>
    </Section>
  );
};

export default UserCertificatePage;
