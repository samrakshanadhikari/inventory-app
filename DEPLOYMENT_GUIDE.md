# 🚀 Deployment Guide for Inventory Management App

## Quick Deploy Options for Recruiters

### Option 1: Vercel (Recommended - Easiest)

1. **Go to [vercel.com](https://vercel.com) and sign up/login**
2. **Connect your GitHub account**
3. **Import your repository**: `samrakshanadhikari/inventory-app`
4. **Set Environment Variables** in Vercel dashboard:
   ```
   DATABASE_URL=your-production-database-url
   NEXTAUTH_URL=https://your-app-name.vercel.app
   NEXTAUTH_SECRET=your-secure-secret-key
   ```
5. **Deploy!** Vercel will automatically build and deploy your app

### Option 2: Railway (Database Included)

1. **Go to [railway.app](https://railway.app) and sign up**
2. **Create new project from GitHub**
3. **Add PostgreSQL database service**
4. **Deploy your app with the database URL**

### Option 3: Render (Free Tier Available)

1. **Go to [render.com](https://render.com) and sign up**
2. **Connect GitHub and create new Web Service**
3. **Add PostgreSQL database**
4. **Set environment variables and deploy**

## Environment Variables Needed

```bash
# Database (Required)
DATABASE_URL="postgresql://username:password@host:port/database"

# NextAuth.js (Required)
NEXTAUTH_URL="https://your-app-domain.com"
NEXTAUTH_SECRET="your-secure-secret-key-32-chars-min"

# Optional: For production optimizations
NODE_ENV="production"
```

## Database Setup Options

### Option A: Vercel + Neon (Recommended)
1. Go to [neon.tech](https://neon.tech) (free PostgreSQL)
2. Create database
3. Copy connection string to `DATABASE_URL`

### Option B: Railway PostgreSQL
1. Add PostgreSQL service in Railway
2. Use provided connection string

### Option C: Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create project
3. Use connection string from Settings > Database

## Post-Deployment Steps

1. **Run database migrations**:
   ```bash
   npx prisma migrate deploy
   ```

2. **Seed the database**:
   ```bash
   npx prisma db seed
   ```

3. **Test the app**:
   - Visit your deployed URL
   - Try logging in with demo accounts
   - Test adding/editing assets

## Demo Accounts for Testing

- **Admin**: `admin` or `admin@example.com` (password: any)
- **Staff**: `staff` or `staff1@example.com` (password: any)

## Features to Show Recruiters

✅ **Full-Stack Application**
- Next.js 15 with TypeScript
- PostgreSQL database with Prisma ORM
- NextAuth.js authentication
- Role-based access control

✅ **Modern UI/UX**
- Responsive design
- Beautiful animations
- Glass morphism effects
- Professional styling

✅ **Complete CRUD Operations**
- Add/Edit/Delete assets
- User management
- Vendor management
- Checkout system

✅ **Production Ready**
- Environment variables
- Database migrations
- Error handling
- Type safety

## Troubleshooting

### Common Issues:
1. **Database connection errors**: Check `DATABASE_URL`
2. **Authentication issues**: Verify `NEXTAUTH_SECRET` and `NEXTAUTH_URL`
3. **Build failures**: Ensure all dependencies are in `package.json`

### Support:
- Check the logs in your deployment platform
- Verify environment variables are set correctly
- Ensure database is accessible from your app

## Cost Estimates

- **Vercel**: Free tier (hobby plan)
- **Neon Database**: Free tier (500MB)
- **Total**: $0/month for small projects

## Live Demo URL
Once deployed, your app will be available at:
`https://your-app-name.vercel.app`

Perfect for sharing with recruiters! 🎉
