import { PagePaths } from '@/constants';
import { IUsePreviewPage } from '@/types/hooks.types';
import { useSearchParams } from 'react-router-dom';

const usePreviewPage = (): IUsePreviewPage => {
  const [searchParams] = useSearchParams();
  const previewId = searchParams.get(PagePaths.dynamicPreviewId) ?? '';
  const isPreviewPage = Boolean(previewId);

  return { isPreviewPage, previewId };
};

export default usePreviewPage;
