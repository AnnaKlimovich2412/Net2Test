export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  lastLogin: Date;
  lastLoginString: string;
  creationDate: Date;
  createdBy: CreatedBy;
  active: boolean;
  supplierId: string;
  roles: Role[];
  labels: Label[];
  userPreferences: UserPreference[];
  departmentId: string;
  hasAccessToAllLabels: boolean;
  language: Language;
  enabled: boolean;
  apiAccessAllowed: boolean;
  isAdmin: boolean;
  tokenExpiration: number;
  hasPicture: boolean;
}

export interface CreatedBy {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
}

export interface Role {
  name: string;
}

export interface Label {
  id: string;
  name: string;
  damBadgeColor: string;
}

export interface UserPreference {
  key: string;
  value: string;
}

export interface Language {
  id: string;
  name: string;
}

