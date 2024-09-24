import { FC } from 'react';
import { Input } from './SearchField.styled';
import { InputChangeEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';

const SearchField: FC = () => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const location = searchParams.get(SearchParamsKeys.location) ?? '';

  const onInputChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;

    updateSearchParams({ key, value });
  };

  return (
    <Input
      type='text'
      placeholder='Пошук'
      name={SearchParamsKeys.location}
      onChange={onInputChange}
      defaultValue={location}
      autoFocus
    />
  );
};

export default SearchField;
