type MyPackageType = 'base' | 'custom';

export interface PackageDto {
  id: number;
  title: string;
  description: string;
  package_type: MyPackageType;
  price: number;
  minimum_participants: number;
  maximum_participants: number;
  activity_id: number;
  items_ids: number[];
  clients_ages: number[];
  date: string; // should be of type Date and formatted as '2024-04-27T10:15:30+05:30'
}

export const packageTypes = ['base', 'additional'];
