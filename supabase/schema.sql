create table appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  patient_type text not null,
  patient_name text not null,
  dob date,
  phone text not null,
  email text not null,
  service_type text not null,
  preferred_date date,
  preferred_time text,
  doctor_preference text,
  insurance_carrier text,
  notes text,
  status text default 'pending'
);
alter table appointments enable row level security;

create policy "anon can insert appointments" on appointments
  for insert
  with check (true);

create policy "service role can read appointments" on appointments
  for select
  using ((select auth.jwt() ->> 'role') = 'service_role');
